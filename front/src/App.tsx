import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TodoList } from './ui/screens/TodoList';

interface Props {}

const queryClient = new QueryClient();

export const App: React.FC<Props> = () => (
  <HashRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/"  element={<TodoList/>} />
      </Routes>
    </QueryClientProvider>
  </HashRouter>
);
