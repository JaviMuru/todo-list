import { GetTodosController } from '../getTodosController';
import {
  mockRequest,
  mockResponse,
  todosServiceMock
} from './_mocks/todosServiceMock';

describe('GetTodosController', () => {
  let getTodosController: GetTodosController;

  beforeEach(() => {
    getTodosController = new GetTodosController(todosServiceMock);
  });

  it('should list all todos', async () => {
    await getTodosController.execute(mockRequest(), mockResponse());

    expect(todosServiceMock.findAll).toHaveBeenCalled();
  });
});
