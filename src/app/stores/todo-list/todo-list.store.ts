import * as actions from '../todo-list/todo-list.action';
import { Todo } from '../../interfaces/todo.interface';
import { tassign } from 'tassign';

export interface ITodoState {

}

export const TODO_INITIAL_STATE: ITodoState = {

};

function loadTodos(state: ITodoState, action: { type: string, body: ITodoState }) {

}

function addTodo(state: ITodoState, action: { type: string, body: Todo }, timestamp) {

}

function toggleTodo(state: ITodoState, action: { type: string, body: Todo }, timestamp) {

}

function markTodoAsDone(state: ITodoState, action: { type: string, body: Todo }, timestamp) {

}

export function todoReducer(state: ITodoState = TODO_INITIAL_STATE, action) {

}
