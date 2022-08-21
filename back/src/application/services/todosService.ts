import { todosPostgresSqlRepository } from '../../infrastructure/adapters/repositories/todosPostgresSqlRepository';
import { TodosRepository } from '../../domain/repositories/todosRepository';
import { TodoCreateDto } from '../../infrastructure/dtos/TodoCreateDto';
import { TodoDto } from '../../infrastructure/dtos/TodoDto';

export class TodosService {
  constructor(private readonly todosPostgresSqlRepository: TodosRepository) {}

  findAll(): Promise<TodoDto[]> {
    return this.todosPostgresSqlRepository.searchAll();
  }

  save(todoCreateDto: TodoCreateDto): Promise<void> {
    return this.todosPostgresSqlRepository.save(todoCreateDto);
  }

  update(id: string, completed: boolean): Promise<void> {
    return this.todosPostgresSqlRepository.update(id, completed);
  }

  remove(id: string): Promise<void> {
    return this.todosPostgresSqlRepository.remove(id);
  }
}

export const todosService = new TodosService(todosPostgresSqlRepository);
