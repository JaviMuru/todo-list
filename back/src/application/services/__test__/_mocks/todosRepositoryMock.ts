import { TodosPostgresSqlRepository } from '../../../../infrastructure/adapters/repositories/todosPostgresSqlRepository';
import { TodosRepository } from '../../../../domain/repositories/todosRepository';

export const todosRepositoryMock: TodosRepository =
  new TodosPostgresSqlRepository();

todosRepositoryMock.searchAll = jest.fn().mockResolvedValue([
  {
    id: '6443164d-0a4f-441e-9d76-f3bdf9a8c885',
    task: 'Task',
    completed: false,
    createdDate: '2022-08-22T05:15:10.325Z'
  }
]);

todosRepositoryMock.save = jest.fn().mockResolvedValue(() => {});

todosRepositoryMock.update = jest.fn().mockResolvedValue(() => {});

todosRepositoryMock.remove = jest.fn().mockResolvedValue(() => {});
