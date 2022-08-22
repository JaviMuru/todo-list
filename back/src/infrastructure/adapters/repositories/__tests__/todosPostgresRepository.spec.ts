import { todosPostgresSqlRepository } from '../todosPostgresSqlRepository';
import { postgresSqlConnection } from '../../../database/postgresDatabase';

describe('TodosPostgresRepository', () => {
  it('should get all todos', async () => {
    const todoCollection = [
      {
        id: '6443164d-0a4f-441e-9d76-f3bdf9a8c885',
        task: 'Task',
        completed: false,
        created_date: '2022-08-22T05:15:10.325Z'
      }
    ];
    jest
      .spyOn(postgresSqlConnection.getConnection(), 'query')
      // @ts-ignore
      .mockResolvedValueOnce({ rows: todoCollection, rowsCount: 0 });

    const todos = await todosPostgresSqlRepository.searchAll();

    expect(postgresSqlConnection.getConnection().query).toHaveBeenCalledTimes(
      1
    );
    expect(todos).toEqual([
      {
        id: '6443164d-0a4f-441e-9d76-f3bdf9a8c885',
        task: 'Task',
        completed: false,
        createdDate: '2022-08-22T05:15:10.325Z'
      }
    ]);
  });

  it('should create a todo', async () => {
    jest
      .spyOn(postgresSqlConnection.getConnection(), 'query')
      // @ts-ignore
      .mockResolvedValueOnce({ rows: [], rowsCount: 0 });

    await todosPostgresSqlRepository.save({
      task: 'Task create',
      completed: false
    });

    expect(postgresSqlConnection.getConnection().query).toHaveBeenCalledWith(
      'INSERT INTO todos (id, task, completed, created_date) VALUES ($1, $2, $3, $4)',
      expect.arrayContaining(['Task create', false])
    );
  });

  it('should update a todo', async () => {
    const id = '6443164d-0a4f-441e-9d76-f3bdf9a8c885';
    const completed = true;
    jest
      .spyOn(postgresSqlConnection.getConnection(), 'query')
      // @ts-ignore
      .mockResolvedValueOnce({ rows: [], rowsCount: 0 });

    await todosPostgresSqlRepository.update(id, completed);

    expect(postgresSqlConnection.getConnection().query).toHaveBeenCalledWith(
      'UPDATE todos SET completed = $1 WHERE id = $2',
      expect.arrayContaining([completed, id])
    );
  });

  it('should remove a todo', async () => {
    const id = '6443164d-0a4f-441e-9d76-f3bdf9a8c885';
    jest
      .spyOn(postgresSqlConnection.getConnection(), 'query')
      // @ts-ignore
      .mockResolvedValueOnce({ rows: [], rowsCount: 0 });

    await todosPostgresSqlRepository.remove(id);

    expect(postgresSqlConnection.getConnection().query).toHaveBeenCalledWith(
      'DELETE FROM todos WHERE id = $1',
      expect.arrayContaining([id])
    );
  });
});
