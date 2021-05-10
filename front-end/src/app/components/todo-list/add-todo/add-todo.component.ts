import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';
import { inOutAnimation } from 'src/app/util/animations/inOutAnimation';
import { CustomValidator } from 'src/app/util/validators/Validator';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  animations: [
    inOutAnimation
  ]
})
export class AddTodoComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

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
    createdByEmail: ['', [Validators.required],
      [CustomValidator.emailValidator]
    ],
  });

  constructor(
    private service: TodoService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  addTodo(): void {
    const addSubscription = this.service.add({
      content: this.form.get('content').value,
      createdByEmail: this.form.get('createdByEmail').value,
      createdByName: this.form.get('createdByName').value,
      isCompleted: false,
      timesCompleted: 0,
      timesEdited: 0,
      isPinned: false
    }).subscribe();

    this.subscriptions.push(addSubscription);

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

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  log(msg) {
    console.log(msg)
  }
}
