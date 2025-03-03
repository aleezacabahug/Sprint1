import MainLayout from '../../components/layout/MainLayout';
import React from 'react';
import WeeklyCalendar from '../../components/calendar/WeeklyCalendar';

export default function Home() {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-6">Weekly Schedule</h1>
      <p>Welcome to your weekly planner! This will help you stay organized and productive.</p>
      
      {/* We'll add the calendar and task components here later */}
      <div className="mt-6 p-6 bg-white rounded-lg shadow">
        <p>Your schedule will appear here soon.</p>
        <WeeklyCalendar />
      </div>
    </MainLayout>
  );
}