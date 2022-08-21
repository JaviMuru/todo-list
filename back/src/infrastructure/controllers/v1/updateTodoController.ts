import { Request, Response } from 'express';
import {
  todosService,
  TodosService
} from '../../../application/services/todosService';

export class UpdateTodoController {
  constructor(private readonly todosService: TodosService) {}

  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const { completed } = request.body;

    await this.todosService.update(id, completed);

    response.status(200).send(`Todo updated with ID: ${id}`);
  }
}

export const updateTodoController = new UpdateTodoController(todosService);
