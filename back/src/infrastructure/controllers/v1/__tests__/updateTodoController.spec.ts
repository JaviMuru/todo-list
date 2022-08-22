import { GetTodosController } from '../getTodosController';
import {
  mockRequest,
  mockResponse,
  todosServiceMock
} from './_mocks/todosServiceMock';
import { CreateTodoController } from '../createTodoController';
import { UpdateTodoController } from '../updateTodoController';

describe('UpdateTodoController', () => {
  let updateTodoController: UpdateTodoController;

  beforeEach(() => {
    updateTodoController = new UpdateTodoController(todosServiceMock);
  });

  it('should update todo state', async () => {
    await updateTodoController.execute(mockRequest(), mockResponse());

    expect(todosServiceMock.update).toHaveBeenCalled();
  });
});
