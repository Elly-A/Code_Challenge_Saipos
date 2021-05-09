import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  actionDescription = 'Adicionar nova tarefa.';

  constructor() { }

  ngOnInit(): void {
  }

}
