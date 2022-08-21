import request from 'supertest';
import { app } from '../src/App';
import { Pool } from 'pg';

describe('Todos (e2e)', () => {
  let postgresSqlConnection: Pool;

  beforeAll(() => {
    postgresSqlConnection = new Pool({
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PASSWORD,
      port: 5432
    });
  });

  it('/ (GET)', async () => {
    const response = await request(app).get('/todos').send();

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual([
      {
        id: '6443164d-0a4f-441e-9d76-f3bdf9a8c885',
        task: 'Task',
        completed: false,
        createdDate: '2022-07-20T18:04:03.000Z'
      }
    ]);
  });

  it('/ (POST)', async () => {
    const response = await request(app)
      .post('/todos')
      .send({ task: 'Task Creation', completed: true });

    expect(response.statusCode).toEqual(201);
    const { rows: todos } = await postgresSqlConnection.query(
      `SELECT * FROM public.todos;`
    );
    expect(todos).toHaveLength(2);
  });

  it('/ (PUT)', async () => {
    const id = '6443164d-0a4f-441e-9d76-f3bdf9a8c885';

    const response = await request(app)
      .put(`/todos/${id}`)
      .send({ completed: true });

    expect(response.statusCode).toEqual(200);
    const { rows: todos } = await postgresSqlConnection.query(
      `SELECT * FROM public.todos WHERE id = $1;`,
      [id]
    );
    expect(todos[0].completed).toBeTruthy();
  });

  it('/ (DELETE)', async () => {
    const id = '6443164d-0a4f-441e-9d76-f3bdf9a8c885';

    const response = await request(app).delete(`/todos/${id}`).send();

    expect(response.statusCode).toEqual(200);
    const { rows: todos } = await postgresSqlConnection.query(
      `SELECT * FROM public.todos WHERE id = $1;`,
      [id]
    );
    expect(todos).toHaveLength(0);
  });

  afterAll(() => {
    postgresSqlConnection.end();
  });
});
