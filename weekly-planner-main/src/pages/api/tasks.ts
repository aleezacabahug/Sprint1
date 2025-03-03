import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../util/db';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const tasks = await db.selectFrom('tasks').selectAll().execute();
    res.status(200).json(tasks);
  } else if (req.method === 'POST') {
    const { day, task } = req.body;
    await db.insertInto('tasks').values({ id: uuidv4(), day, task }).execute();
    res.status(201).json({ message: 'Task added successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}