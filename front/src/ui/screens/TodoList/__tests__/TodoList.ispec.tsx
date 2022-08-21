import { render } from 'ui/__tests__/utils';
import { todoService } from 'core/services/TodoService';
import { TodoList } from '../index';
import { fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';

describe('TodoList', () => {
  it('shows task list', async () => {
    jest.spyOn(todoService, 'findAll').mockResolvedValue([{
      id: 'id',
      task: 'My task',
      completed: false,
      createdDate: new Date()
    }]);

    const { getByText, getByTestId } = render(<TodoList />);
    await waitForElementToBeRemoved(() => getByTestId('loading'));

    expect(getByText('My task')).toBeDefined();
  });

  // TODO: Revise antd component form
  it.skip('creates a task', async () => {
    jest.spyOn(todoService, 'findAll').mockResolvedValue([{
      id: 'id',
      task: 'My task',
      completed: false,
      createdDate: new Date()
    }]);
    jest.spyOn(todoService, 'create').mockResolvedValue();

    const {  getByTestId } = render(<TodoList />);

    await waitFor( () => fireEvent.click(getByTestId('add-input')));
    await waitFor(() => fireEvent.change(getByTestId('add-input'), 'My new task'));
    await waitFor( () => fireEvent.click(getByTestId('add-button')));


    await waitFor(() => expect(todoService.create).toHaveBeenCalledWith({
      task: 'My new task',
      completed: false
    }));
  });


});
