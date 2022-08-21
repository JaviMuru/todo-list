import { TodosRepository } from '../../../domain/repositories/todosRepository';
import { TodoCreateDto } from '../../dtos/TodoCreateDto';
import { todoCreateDeserializer } from '../../serialization/todoCreateDeserializer';
import { todoSerializer } from '../../serialization/todoSerializer';
import { TodoDto } from '../../dtos/TodoDto';
import {postgresSqlConnection} from "../../database/postgresDatabase";

export class TodosPostgresSqlRepository implements TodosRepository {
  async searchAll(): Promise<TodoDto[]> {
    const { rows: todos } = await postgresSqlConnection.getConnection().query(
      'SELECT * FROM todos ORDER BY created_date DESC;'
    );

    return todos.map(todoSerializer.encode);
  }

  async save(todoCreateDto: TodoCreateDto): Promise<void> {
    const todo = todoCreateDeserializer.parse(todoCreateDto);

    await postgresSqlConnection.getConnection().query(
      'INSERT INTO todos (id, task, completed, created_date) VALUES ($1, $2, $3, $4)',
      [todo.id, todo.task, todo.completed, todo.created_date]
    );
  }

  async update(id: string, completed: boolean): Promise<void> {
    await postgresSqlConnection.getConnection().query(
      'UPDATE todos SET completed = $1 WHERE id = $2',
      [completed, id]
    );
  }

  async remove(id: string): Promise<void> {
    await postgresSqlConnection.getConnection().query('DELETE FROM todos WHERE id = $1', [id]);
  }
}

export const todosPostgresSqlRepository = new TodosPostgresSqlRepository();
