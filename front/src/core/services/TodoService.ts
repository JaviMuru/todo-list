import { Todo } from '../domain/model/Todo/Todo'
import { todoRepository } from '../infrastructure/TodoRepository'
import { TodoCreate } from '../domain/model/Todo/TodoCreate'

export const todoService = {
  findAll: async (): Promise<Todo[]> => todoRepository.findAll(),
  create: async (todoCreate: TodoCreate): Promise<void> => todoRepository.create(todoCreate),
  update: async (id: string, status: boolean): Promise<void> => todoRepository.update(id, status),
  delete: async (id: string): Promise<void> => todoRepository.delete(id)
}
