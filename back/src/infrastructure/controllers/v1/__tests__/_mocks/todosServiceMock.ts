import { TodosService } from '../../../../../application/services/todosService';
import { TodosPostgresSqlRepository } from '../../../../adapters/repositories/todosPostgresSqlRepository';
import { Request, Response } from 'express';

export const todosServiceMock: TodosService = new TodosService(
  new TodosPostgresSqlRepository()
);

todosServiceMock.findAll = jest
  .fn()
  .mockResolvedValue([{ id: '1', task: 'Task 1', completed: false }]);

todosServiceMock.save = jest.fn().mockResolvedValue(() => {});

todosServiceMock.update = jest.fn().mockResolvedValue(() => {});

todosServiceMock.remove = jest.fn().mockResolvedValue(() => {});

export const mockResponse = () => {
  const res = {} as unknown as Response;

  res.json = jest.fn();
  res.status = jest.fn(() => res);
  res.send = jest.fn(() => res);

  return res;
};

export const mockRequest = () => {
  const req = {} as unknown as Request;

  req.body = jest.fn();
  // @ts-ignore
  req.params = jest.fn(() => req);

  return req;
};
