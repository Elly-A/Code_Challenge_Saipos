import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { CustomValidator } from 'src/app/util/validators/Validator';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0, height: '0' }),
            animate('.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
              style({ opacity: 1, height: '*' }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1, height: '*' }),
            animate('.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
              style({ opacity: 0, height: '0' }))
          ]
        ),
      ]
    ),
  ]
})
export class AddTodoComponent implements OnInit {
  openFormDescription = 'Adicionar nova tarefa';
  closeFormDescription = 'Cancelar';
  formOpen = false;

  form = this.fb.group({
    content: ['', [
      Validators.required,
    ]],
    createdByName: ['', [
      Validators.required
    ]],
    createdByEmail: ['', [Validators.required], [CustomValidator.emailValidator]],
  });

  constructor(
    private service: TodoService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    this.service.add({
      content: this.form.get('content').value,
      createdByEmail: this.form.get('createdByEmail').value,
      createdByName: this.form.get('createdByName').value,
      isCompleted: false,
      timesCompleted: 0,
      timesEdited: 0,
      isPinned: false
    });

    this.form.reset();
    this.closeForm();
  }

  openForm(): void {
    this.formOpen = true;
  }

  closeForm(): void {
    this.formOpen = false;
  }

  correctCreatedByEmailField(newField: string): void {
    this.form.controls.createdByEmail.setValue(newField);
  }
}
