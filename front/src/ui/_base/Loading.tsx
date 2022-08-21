import { Space, Spin } from 'antd';
import React from 'react';

export const Loading: React.FC = () => (
  <Space size="middle" data-testid="loading">
    <Spin size="large" />
  </Space>
);
