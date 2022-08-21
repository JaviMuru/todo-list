import { TodoCreateDto } from '../../infrastructure/dtos/TodoCreateDto';
import { TodoDto } from '../../infrastructure/dtos/TodoDto';

export interface TodosRepository {
  searchAll(): Promise<TodoDto[]>;

  save(todoCreateDto: TodoCreateDto): Promise<void>;

  update(id: string, completed: boolean): Promise<void>;

  remove(id: string): Promise<void>;
}
