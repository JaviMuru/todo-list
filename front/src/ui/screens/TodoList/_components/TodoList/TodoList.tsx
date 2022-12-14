import React from 'react'
import { List } from 'antd'
import { Todo } from 'core/domain/model/Todo/Todo'
import { TodoItem } from '../TodoItem'

interface Props {
  todos: Todo[]
  onTodoRemoval: (todoId: string) => void
  onTodoToggle: (todo: Todo) => void
}

export const TodoList: React.FC<Props> = ({ todos, onTodoRemoval, onTodoToggle }) => (
  <List
    locale={{
      emptyText: 'Nothing to do'
    }}
    dataSource={todos}
    renderItem={todo => <TodoItem todo={todo} onTodoToggle={onTodoToggle} onTodoRemoval={onTodoRemoval} />}
    pagination={{
      position: 'bottom',
      pageSize: 15
    }}
  />
)
