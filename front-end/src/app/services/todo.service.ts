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
  private url = 'http://localhost:3000/todos/';

  constructor(
    private redux: NgRedux<IAppState>,
    private http: HttpClient) { }

  getAll(): void {
    this.http.get(this.url)
      .subscribe(res => {
        const todos = res[0];
        this.redux.dispatch({
          type: actions.LOAD_TODOS, body: todos
        });
      })
  }
  get(id: string): void {
    throw new Error('Method not implemented.');
  }
  add(t: Todo): void {
    this.http.post(this.url + 'add', t)
      .subscribe(_ => {
        this.redux.dispatch({
          type: actions.ADD_TODO,
          body: t
        });
      })
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
