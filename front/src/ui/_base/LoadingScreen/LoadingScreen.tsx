import { Space, Spin } from 'antd'
import React from 'react'

import './styles.less'

export const LoadingScreen: React.FC = () => (
  <div className="loading-container">
    <Space size="middle" data-testid="loading">
      <Spin size="large" />
    </Space>
  </div>
)
