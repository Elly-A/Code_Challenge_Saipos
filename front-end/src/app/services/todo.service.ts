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

  getAll(): Observable<void> {
    return this.http.get(this.url)
      .pipe(
        map(res => {
          const todos = res;
          this.redux.dispatch({
            type: actions.LOAD_TODOS, body: todos
          });
        }));
  }
  get(id: string): void {
    throw new Error('Method not implemented.');
  }
  add(t: Todo): Observable<void> {
    return this.http.post(this.url + 'add', t)
      .pipe(
        map(res => {
          const todo = res;

          this.redux.dispatch({
            type: actions.ADD_TODO,
            body: todo
          });
        }
        ));
  }
  update(t: Todo): Observable<void> {
    return this.http.put(this.url + t.id, t)
      .pipe(
        map(_ => {
          this.redux.dispatch({
            type: actions.UPDATE_TODO,
            body: t
          });
        }));
  }
  remove(id: string): void {
    throw new Error('Method not implemented.');
  }

  getThreeRandomTodos(): Observable<Todo[]> {
    // Returning service unavailable
    const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=3';
    return this.http.get(url)
      .pipe(
        map(
          (randomFactArr:
            { _id: string, __v: number, text: string, updatedAt: Date, deleted: boolean, source: string, sentCount: number }[]
          ) => {
            const todos: Todo[] = [];

            randomFactArr.forEach(randomFact => {
              todos.push({
                content: randomFact.text,
                createdByEmail: 'eu@me.com',
                createdByName: 'Eu',
                isCompleted: false,
                isPinned: false,
                timesCompleted: 0,
                timesEdited: 0
              });
            });

            return todos;
          }
        )
      );
  }
}
