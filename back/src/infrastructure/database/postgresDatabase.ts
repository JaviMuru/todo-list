import { Pool } from 'pg';
require('dotenv').config()

class PostgresSqlConnection {
  private connection: Pool

  constructor(host: string, user: string, password:string, port: number) {
    this.connection = new Pool({host, user, password, port})
  }

  getConnection(): Pool {
    return this.connection
  }
}

export const postgresSqlConnection = new PostgresSqlConnection(
  process.env.SQL_HOST!,
  process.env.SQL_USER!,
  process.env.SQL_PASSWORD!,
  5432
)
