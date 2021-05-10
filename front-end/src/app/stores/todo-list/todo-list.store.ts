import { actions } from '../todo-list/todo-list.action';
import { Todo } from '../../interfaces/todo.interface';
import { tassign } from 'tassign';
import { convertArrayToObject } from 'src/app/util/convertArrayToObject';

export interface ITodoState {
  todos: { [id: string]: Todo };
}

export const TODO_INITIAL_STATE: ITodoState = {
  todos: {}
};

function loadTodos(state: ITodoState, action: { type: string, body: Todo[] }): ITodoState {
  const todosObj = convertArrayToObject(action.body);

  return tassign(state, {
    todos: {
      ...state.todos,
      ...todosObj
    }
  });
}

function addTodo(state: ITodoState, action: { type: string, body: Todo }): ITodoState {
  return tassign(state, {
    todos: {
      ...state.todos,
      [action.body.id]: action.body
    }
  });
}

function updateTodo(state: ITodoState, action: { type: string, body: Todo }): ITodoState {
  return tassign(state, {
    todos: {
      ...state.todos,
      [state.todos[action.body.id].id]: {
        ...state.todos[action.body.id],
        ...action.body
      }
    }
  });
}

export function todoReducer(
  state: ITodoState = TODO_INITIAL_STATE,
  action: { type: string, body: any }): ITodoState {
  switch (action.type) {
    case actions.LOAD_TODOS: return loadTodos(state, action);

    case actions.ADD_TODO: return addTodo(state, action);

    case actions.UPDATE_TODO: return updateTodo(state, action);

    default: return state;
  }
}
