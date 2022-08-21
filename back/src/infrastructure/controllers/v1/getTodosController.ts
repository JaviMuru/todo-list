import { Request, Response } from 'express';
import {
  todosService,
  TodosService
} from '../../../application/services/todosService';

export class GetTodosController {
  constructor(private readonly todosService: TodosService) {}

  async execute(request: Request, response: Response) {
    const todos = await this.todosService.findAll();

    response.status(200).json(todos);
  }
}
export const getTodosController = new GetTodosController(todosService);
