import { TodosService } from '../todosService';
import { todosRepositoryMock } from './_mocks/todosRepositoryMock';

describe('TodosService', () => {
  let todosService: TodosService;

  beforeEach(() => {
    todosService = new TodosService(todosRepositoryMock);
  });

  it('should get all todos', async () => {
    const todos = await todosService.findAll();

    expect(todosRepositoryMock.searchAll).toHaveBeenCalledTimes(1);
    expect(todos).toEqual([{ id: '1', task: 'Task 1', completed: false }]);
  });

  it('should create a todo', async () => {
    const todoCreate = { task: 'Create task', completed: false };

    await todosService.save(todoCreate);

    expect(todosRepositoryMock.save).toHaveBeenCalledWith(todoCreate);
  });

  it('should update a todo', async () => {
    const todoId = '1';
    const todoCompleted = false;

    await todosService.update(todoId, todoCompleted);

    expect(todosRepositoryMock.update).toHaveBeenCalledWith(
      todoId,
      todoCompleted
    );
  });

  it('should delete a todo', async () => {
    const todoId = '1';

    await todosService.remove(todoId);

    expect(todosRepositoryMock.remove).toHaveBeenCalledWith(todoId);
  });
});
