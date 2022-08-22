import {
  mockRequest,
  mockResponse,
  todosServiceMock
} from './_mocks/todosServiceMock';
import { DeleteTodoController } from '../deleteTodoController';

describe('DeleteTodoController', () => {
  let deleteTodoController: DeleteTodoController;

  beforeEach(() => {
    deleteTodoController = new DeleteTodoController(todosServiceMock);
  });

  it('should delete a todo', async () => {
    await deleteTodoController.execute(mockRequest(), mockResponse());

    expect(todosServiceMock.remove).toHaveBeenCalled();
  });
});
