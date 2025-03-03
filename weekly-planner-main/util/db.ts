import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

interface Task {
  id: string;
  day: string;
  task: string;
}

interface Activity {
  id: string;
  day: string;
  activity: string;
}

interface ClassItem {
  id: string;
  day: string;
  classItem: string;
}

interface Database {
  tasks: Task;
  activities: Activity;
  classes: ClassItem;
}

const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: 'localhost',
      database: 'weekly-planner',
      user: 'postgres',
      password: 'ilm3000',
    }),
  }),
});

export { db };