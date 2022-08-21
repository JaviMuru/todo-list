import { Pool } from 'pg';

export const postgresSqlConnection = new Pool({
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: 5432
});
