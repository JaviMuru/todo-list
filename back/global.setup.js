module.exports = async () => {
  process.env.NODE_ENV = 'test';
  process.env.SQL_HOST = 'localhost';
  process.env.SQL_USER = 'postgres';
  process.env.SQL_PASSWORD = 'postgres';
  process.env.SQL_PORT =  5433;
}
