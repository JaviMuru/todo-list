import React from 'react'
import { Form, Row, Col, Button, Input } from 'antd'
import { PlusCircleFilled } from '@ant-design/icons'

import './styles.less'
import { TodoCreate } from '../../../../../core/domain/model/Todo/TodoCreate'

interface Props {
  onFormSubmit: (todoCreate: TodoCreate) => void
}

export const AddTodoForm: React.FC<Props> = ({ onFormSubmit }) => {
  const [form] = Form.useForm()

  const onFinish = () => {
    console.log('@@@@@@@@@ clicked');
    onFormSubmit({
      task: form.getFieldValue('name'),
      completed: false
    })

    form.resetFields()
  }

  return (
    <Form form={form} onFinish={onFinish} layout="horizontal" className="todo-form">
      <Row gutter={20}>
        <Col xs={24} sm={24} md={17} lg={19} xl={20}>
          <Form.Item name={'name'} rules={[{ required: true, message: 'This field is required' }]}>
            <Input placeholder="What needs to be done?" data-testid="add-input"/>
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={7} lg={5} xl={4}>
          <Button type="primary" htmlType="submit" block data-testid="add-button">
            <PlusCircleFilled />
            Add todo
          </Button>
        </Col>
      </Row>
    </Form>
  )
}
