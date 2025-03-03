import React, { useState, useEffect } from "react";
import styles from './WeeklyCalendar.module.css';

type Task = string;
type Activity = string;
type ClassItem = string;
type Day = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

const daysOfWeek: Day[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const initialState: Record<Day, string[]> = {
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
};

const WeeklyCalendar: React.FC = () => {
    const [tasks, setTasks] = useState<Record<Day, Task[]>>(initialState);
    const [activities, setActivities] = useState<Record<Day, Activity[]>>(initialState);
    const [classes, setClasses] = useState<Record<Day, ClassItem[]>>(initialState);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/tasks');
            const data = await response.json();
            const tasksData: Record<Day, Task[]> = initialState;

            data.forEach((task: { day: Day; task: Task }) => {
                tasksData[task.day].push(task.task);
            });

            setTasks(tasksData);
        };
        fetchData();
    }, []);

    const addTask = async (day: Day, task: Task) => {
        const newTasks = { ...tasks, [day]: [...(tasks[day] || []), task] };
        setTasks(newTasks);

        await fetch('/api/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ day, task }),
        });
    };

    return (
        <div className={styles.weeklyCalendar}>
            {daysOfWeek.map((day) => (
                <div key={day} className={styles.dayColumn}>
                    <h2>{day}</h2>
                    <div className={styles.tasks}>
                        <h3>Tasks</h3>
                        <ul>
                            {(tasks[day] || []).map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                        <button onClick={() => addTask(day, prompt('Enter a new task') || '')}>Add Task</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default WeeklyCalendar;