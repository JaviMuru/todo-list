import { Request, Response } from 'express';
import {
  todosService,
  TodosService
} from '../../../application/services/todosService';

export class DeleteTodoController {
  constructor(private readonly todosService: TodosService) {}

  async execute(request: Request, response: Response) {
    const { id } = request.params;

    await this.todosService.remove(id);

    response.status(200).send();
  }
}

export const deleteTodoController = new DeleteTodoController(todosService);
