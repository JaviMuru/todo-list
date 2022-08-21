import { GetTodosController } from '../getTodosController';
import {
  mockRequest,
  mockResponse,
  todosServiceMock
} from './_mocks/todosServiceMock';
import { CreateTodoController } from '../createTodoController';

describe('CreateTodoController', () => {
  let createTodoController: CreateTodoController;

  beforeEach(() => {
    createTodoController = new CreateTodoController(todosServiceMock);
  });

  it('should list all todos', async () => {
    await createTodoController.execute(mockRequest(), mockResponse());

    expect(todosServiceMock.save).toHaveBeenCalled();
  });
});
