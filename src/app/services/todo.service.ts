import { Injectable } from '@angular/core';
import { HttpInterface } from '../interfaces/http.interface';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements HttpInterface<Todo> {

  constructor() { }

  getAll(): Todo[] {
    return [
      {
        id: '1',
        createdByName: 'Danielle A.',
        createdByEmail: 'dani@saipos.com',
        content: 'This is a new todo',
        isCompleted: false,
        timesCompleted: 0
      },
      {
        id: '2',
        createdByName: 'Priscila',
        createdByEmail: 'priscila@saipos.com',
        content: 'Olha esse todo!!',
        isCompleted: true,
        timesCompleted: 1
      }
    ];
  }
  get(id: string): Todo {
    throw new Error('Method not implemented.');
  }
  add(t: Todo): Todo {
    throw new Error('Method not implemented.');
  }
  update(t: Todo): Todo {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Todo {
    throw new Error('Method not implemented.');
  }
}
