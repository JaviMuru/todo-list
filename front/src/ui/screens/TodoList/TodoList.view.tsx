import { Todo } from 'core/domain/model/Todo/Todo'
import { Card, Col, PageHeader, Row } from 'antd'
import { AddTodoForm } from './_components/AddTodoForm'
import { TodoList } from './_components/TodoList'
import React from 'react'

import './styles.less'
import { LoadingScreen } from '../../_base/LoadingScreen'
import { TodoCreate } from 'core/domain/model/Todo/TodoCreate'

interface Props {
  todos?: Todo[]
  isLoading: boolean
  onSubmit: (todo: TodoCreate) => void
  removeTodo: (todoId: string) => void
  toggleTodoStatus: (todo: Todo) => void
}

export const TodoListView = ({ todos = [], isLoading, onSubmit, removeTodo, toggleTodoStatus }: Props) => {
  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Row justify="center" align="middle" gutter={[0, 20]} className="todos-container">
      <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 18 }}>
        <PageHeader title="Add Todo" subTitle="In order to add a todo, fill the form below and click in Add todo." />
      </Col>
      <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 18 }}>
        <Card title="Create a new todo">
          <AddTodoForm onFormSubmit={onSubmit} />
        </Card>
      </Col>

      <Col xs={{ span: 23 }} sm={{ span: 23 }} md={{ span: 21 }} lg={{ span: 20 }} xl={{ span: 18 }}>
        <Card title="Todo List">
          <TodoList todos={todos} onTodoRemoval={removeTodo} onTodoToggle={toggleTodoStatus} />
        </Card>
      </Col>
    </Row>
  )
}
