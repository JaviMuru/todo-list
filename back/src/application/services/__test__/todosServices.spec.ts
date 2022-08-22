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
    const todoCreate = { task: 'Create task', completed: false };

    await todosService.save(todoCreate);

    expect(todosRepositoryMock.save).toHaveBeenCalledWith(todoCreate);
  });

  it('should update a todo', async () => {
    const todoId = '6443164d-0a4f-441e-9d76-f3bdf9a8c885';
    const todoCompleted = false;

    await todosService.update(todoId, todoCompleted);

    expect(todosRepositoryMock.update).toHaveBeenCalledWith(
      todoId,
      todoCompleted
    );
  });

  it('should delete a todo', async () => {
    const todoId = '6443164d-0a4f-441e-9d76-f3bdf9a8c885';

    await todosService.remove(todoId);

    expect(todosRepositoryMock.remove).toHaveBeenCalledWith(todoId);
  });
});
