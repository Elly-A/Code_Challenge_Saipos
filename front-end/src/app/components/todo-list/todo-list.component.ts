import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.interface';
import { IAppState } from 'src/app/stores/store';
import { inOutAnimation } from 'src/app/util/animations/inOutAnimation';
import { sortTodos } from 'src/app/util/sortTodos';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    inOutAnimation
  ]
})
export class TodoListComponent implements OnInit {
  @select((s: IAppState) =>
    sortTodos(s.todoState.todos)
      .filter(todo => !todo.isCompleted)) $pendingTodos: Observable<Todo[]>;

  @select((s: IAppState) =>
    sortTodos(s.todoState.todos)
      .filter(todo => todo.isCompleted)) $completedTodos: Observable<Todo[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
