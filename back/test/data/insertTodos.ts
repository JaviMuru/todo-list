import { Pool } from 'pg';

export const postgresSqlConnection = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  port: 5432
});

const insertTodos = async () => {
  await postgresSqlConnection.query(
    `INSERT INTO public.todos (id, task, completed, created_date) VALUES ('6443164d-0a4f-441e-9d76-f3bdf9a8c885', 'Task', false, '2022-07-20 20:04:03.000000');`
  );

  await postgresSqlConnection.end();
};

insertTodos();
