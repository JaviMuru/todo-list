import { Todo } from '../../domain/model/Todo';
import { Serializer } from './serializer';
import { TodoDto } from '../dtos/TodoDto';

export const todoSerializer: Serializer<Todo, TodoDto> = {
  encode: (data) => ({
    id: data.id,
    task: data.task,
    completed: data.completed,
    createdDate: data.created_date
  })
};
