import { Todo } from '../domain/model/Todo/Todo'
import { TodoCreate } from '../domain/model/Todo/TodoCreate'

const BASE_URL = 'http://localhost:4000'
const HEADERS = {
  Accept: 'application/json, text/plain, */*',
  'Content-Type': 'application/json'
}

export const todoRepository = {
  findAll: async (): Promise<Todo[]> => fetch(`${BASE_URL}/todos`).then(res => res.json()),

  create: async (todoCreate: TodoCreate): Promise<void> => {
    await fetch(`${BASE_URL}/todos`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(todoCreate)
    }).then(res => res.text());
  },

  update: async (id: string, status: boolean): Promise<void> => {
    await fetch(`${BASE_URL}/todos/${id}`, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify({ completed: status })
    }).then(res => res.text());
  },

  delete: async (id: string): Promise<void> => {
    await fetch(`${BASE_URL}/todos/${id}`, { method: 'DELETE' }).then(res => res.text());
  }
}
