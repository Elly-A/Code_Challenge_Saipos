import { select } from '@angular-redux/store';
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.interface';
import { IAppState } from 'src/app/stores/store';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  animations: [
    trigger(
      'inOutAnimationTodos',
      [
        transition(
          ':enter',
          [
            style({ width: 0, opacity: 0 }),
            animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)',
              style({ width: '*', opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1, width: '*' }),
            animate('.3s cubic-bezier(0.075, 0.82, 0.165, 1)',
              style({ opacity: 0, width: '0' }))
          ]
        ),
      ]
    ),
  ]
})
export class TodoListComponent implements OnInit {
  @select((s: IAppState) =>
    Object.values(s.todoState.todos).sort((todo1, todo2) => {
      if (!todo1.isPinned && todo2.isPinned) {
        return 1;
      } else if (todo1.isPinned && !todo2.isPinned) {
        return -1;
      } else {
        return parseInt(todo2.id, 10) - parseInt(todo1.id, 10);
      }
    }).filter(todo => !todo.isCompleted)) $pendingTodos: Observable<Todo[]>;

  @select((s: IAppState) =>
    Object.values(s.todoState.todos).sort((todo1, todo2) => {
      if (!todo1.isPinned && todo2.isPinned) {
        return 1;
      } else if (todo1.isPinned && !todo2.isPinned) {
        return -1;
      } else {
        return parseInt(todo2.id, 10) - parseInt(todo1.id, 10);
      }
    }).filter(todo => todo.isCompleted)) $completedTodos: Observable<Todo[]>;

  constructor() { }

  ngOnInit(): void {
  }
}
