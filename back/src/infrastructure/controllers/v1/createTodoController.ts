import { Request, Response } from 'express';
import {
  todosService,
  TodosService
} from '../../../application/services/todosService';
import { TodoCreateDto } from '../../dtos/TodoCreateDto';

export class CreateTodoController {
  constructor(private readonly todosService: TodosService) {}

  async execute(request: Request, response: Response) {
    const todoCreateDto: TodoCreateDto = request.body;

    await this.todosService.save(todoCreateDto);

    response.status(201).send();
  }
}

export const createTodoController = new CreateTodoController(todosService);
