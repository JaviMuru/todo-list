import { Pool } from 'pg';
require('dotenv').config()

export const postgresSqlConnection = new Pool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: 5432
});

const deleteTodos = async () => {
  await postgresSqlConnection.query(`DELETE FROM public.todos;`);

  await postgresSqlConnection.end();
};

deleteTodos();
