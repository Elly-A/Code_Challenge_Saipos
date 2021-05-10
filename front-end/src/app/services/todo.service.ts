import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpInterfaceWithRedux } from '../interfaces/http.interface';
import { Todo } from '../interfaces/todo.interface';
import { IAppState } from '../stores/store';

import { actions } from '../stores/todo-list/todo-list.action';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements HttpInterfaceWithRedux<Todo> {

  constructor(
    private redux: NgRedux<IAppState>,
    private http: HttpClient) { }

  getAll(): void {
    const array: Todo[] = [
      {
        id: '1',
        createdByName: 'Danielle A.',
        createdByEmail: 'dani@saipos.com',
        content: 'This is a new todo',
        isPinned: false,
        isCompleted: false,
        timesEdited: 0,
        timesCompleted: 0
      },
      {
        id: '2',
        createdByName: 'Priscila',
        createdByEmail: 'priscila@saipos.com',
        content: 'Olha esse todo!!',
        isCompleted: true,
        isPinned: false,
        timesEdited: 0,
        timesCompleted: 1
      }
    ];
    this.redux.dispatch({
      type: actions.LOAD_TODOS, body: array
    });
  }
  get(id: string): void {
    throw new Error('Method not implemented.');
  }
  add(t: Todo): void {
    this.redux.dispatch({
      type: actions.ADD_TODO,
      body: t
    });
  }
  update(t: Todo): void {
    this.redux.dispatch({
      type: actions.UPDATE_TODO,
      body: t
    });
  }
  remove(id: string): void {
    throw new Error('Method not implemented.');
  }

  getThreeRandomTodos(): Observable<object> {
    // Returning service unavailable
    const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=3';
    return this.http.get(url)
      .pipe(
        map(res => res)
      );
  }
}
