import React, { useState } from 'react'
import { Tooltip, Tag, List, Button, Switch, Modal } from 'antd'
import { CloseOutlined, CheckOutlined } from '@ant-design/icons'

import './styles.less'
import { Todo } from 'core/domain/model/Todo/Todo'

interface Props {
  todo: Todo
  onTodoRemoval: (todoId: string) => void
  onTodoToggle: (todo: Todo) => void
}

export const TodoItem: React.FC<Props> = ({ todo, onTodoRemoval, onTodoToggle }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const onAccept = () => {
    setIsModalVisible(false)
  }

  const onCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <List.Item
      actions={[
        <Tooltip title={todo.completed ? 'Mark as uncompleted' : 'Mark as completed'}>
          <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onChange={() => onTodoToggle(todo)}
            defaultChecked={todo.completed}
          />
        </Tooltip>,
        <>
          <Button className="remove-todo-button" type="primary" danger onClick={showModal}>
            X
          </Button>
          <Modal
            title="Delete Todo"
            visible={isModalVisible}
            onOk={() => {
              onTodoRemoval(todo.id!)
              onAccept()
            }}
            onCancel={onCancel}>
            <p>Are you sure you want to delete?</p>
          </Modal>
        </>
      ]}
      className="list-item"
      key={todo.id}>
      <div className="todo-item">
        <Tag color={todo.completed ? 'cyan' : 'red'} className="todo-tag">
          {todo.task}
        </Tag>
        <p>{new Date(todo.createdDate).toLocaleString('es-ES')} UTC</p>
      </div>
    </List.Item>
  )
}
