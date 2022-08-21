import { Pool } from 'pg';
require('dotenv').config()

export const postgresSqlConnection = new Pool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: 5432
});

const insertTodos = async () => {
  await postgresSqlConnection.query(
    'TRUNCATE TABLE public.todos;'
  );

  await postgresSqlConnection.query(
    `INSERT INTO public.todos (id, task, completed, created_date) VALUES ('6443164d-0a4f-441e-9d76-f3bdf9a8c885', 'Task', false, '2022-07-20 20:04:03.000000');`
  );

  await postgresSqlConnection.end();
};

insertTodos();
