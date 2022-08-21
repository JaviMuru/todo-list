import { Pool } from 'pg';

export const postgresSqlConnection = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'postgres',
  port: 5432
});

const deleteTodos = async () => {
  await postgresSqlConnection.query(`DELETE FROM public.todos;`);

  await postgresSqlConnection.end();
};

deleteTodos();
