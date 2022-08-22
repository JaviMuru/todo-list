import { TodoListView } from './TodoList.view'
import { todoService } from '../../../core/services/TodoService'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Todo } from 'core/domain/model/Todo/Todo'
import { message } from 'antd'
import { TodoCreate } from 'core/domain/model/Todo/TodoCreate'

export const TodoListController = () => {
  const { data: todos, refetch, isLoading } = useQuery(['todos'], todoService.findAll)

  const { mutate: createTodo } = useMutation(
    async (todoCreate: TodoCreate) => {
      await todoService.create(todoCreate)
    },
    {
      mutationKey: ['createTodo'],
      onSuccess: async () => {
        await refetch()
        message.success('Todo added!')
      }
    }
  )

  const { mutate: removeTodo } = useMutation(
    async (todoId: string) => {
      await todoService.delete(todoId)
    },
    {
      mutationKey: ['removeTodo'],
      onSuccess: async () => {
        await refetch()
        message.success('Todo removed!')
      }
    }
  )

  const { mutate: updateTodoStatus } = useMutation(
    async (todo: Todo) => {
      const { id: todoId, completed } = todo
      await todoService.update(todoId!, !completed!)
    },
    {
      mutationKey: ['updateTodoStatus'],
      onSuccess: async () => {
        await refetch()
        message.success('Todo updated!')
      }
    }
  )

  return (
    <TodoListView
      todos={todos}
      isLoading={isLoading}
      onSubmit={createTodo}
      removeTodo={removeTodo}
      toggleTodoStatus={updateTodoStatus}
    />
  )
}
