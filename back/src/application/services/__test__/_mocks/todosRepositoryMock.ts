import { TodosPostgresSqlRepository } from '../../../../infrastructure/adapters/repositories/todosPostgresSqlRepository';
import { TodosRepository } from '../../../../domain/repositories/todosRepository';

export const todosRepositoryMock: TodosRepository =
  new TodosPostgresSqlRepository();

todosRepositoryMock.searchAll = jest
  .fn()
  .mockResolvedValue([{ id: '1', task: 'Task 1', completed: false }]);

todosRepositoryMock.save = jest.fn().mockResolvedValue(() => {});

todosRepositoryMock.update = jest.fn().mockResolvedValue(() => {});

todosRepositoryMock.remove = jest.fn().mockResolvedValue(() => {});
