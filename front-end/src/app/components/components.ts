import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTodoComponent } from './todo-list/add-todo/add-todo.component';
import { ValidateSupervisorPasswordComponent } from './todo-list/dialog/validate-supervisor-password/validate-supervisor-password.component';
import { GenerateTodosComponent } from './todo-list/generate-todos/generate-todos.component';
import { SingleTodoComponent } from './todo-list/single-todo/single-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const components = [
  TodoListComponent,
  NavbarComponent,
  DarkModeComponent,
  AddTodoComponent,
  SingleTodoComponent,
  ValidateSupervisorPasswordComponent,
  GenerateTodosComponent
]