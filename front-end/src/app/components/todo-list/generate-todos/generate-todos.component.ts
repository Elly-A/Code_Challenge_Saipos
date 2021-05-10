import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'generate-todos',
  templateUrl: './generate-todos.component.html',
  styleUrls: ['./generate-todos.component.scss']
})
export class GenerateTodosComponent implements OnInit {

  constructor(
    private service: TodoService
  ) { }

  ngOnInit(): void {
  }

  getThreeRandom(): void {
    this.service.getThreeRandomTodos()
      .subscribe(todos => {
        todos.forEach(todo => {
          this.service.add(todo)
            .toPromise();
        })
      });
  }

}
