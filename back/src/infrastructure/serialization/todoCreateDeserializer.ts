import { Deserializer } from './deserializer';
import { TodoCreateDto } from '../dtos/TodoCreateDto';
import { Todo } from '../../domain/model/Todo';
import * as uuid from 'uuid';

export const todoCreateDeserializer: Deserializer<TodoCreateDto, Todo> = {
  parse: (dto) => ({
    id: uuid.v4(),
    task: dto.task,
    completed: dto.completed,
    created_date: new Date().toISOString()
  })
};
