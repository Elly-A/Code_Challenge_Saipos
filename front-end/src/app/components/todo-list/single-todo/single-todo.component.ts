import { NgRedux } from '@angular-redux/store';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/interfaces/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { IAppState } from 'src/app/stores/store';
import { inOutAnimation } from 'src/app/util/animations/inOutAnimation';
import { tassign } from 'tassign';
import { ValidateSupervisorPasswordComponent } from '../dialog/validate-supervisor-password/validate-supervisor-password.component';

@Component({
  selector: 'single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss'],
  animations: [
    inOutAnimation,
  ]
})
export class SingleTodoComponent implements OnInit {
  private subscriptions: Subscription[] = [];

  @Input('todo') originalTodo: Todo;
  todo: Todo;

  private currentContent: string;

  editMode = false;

  constructor(
    private dialog: MatDialog,
    private service: TodoService
  ) { }

  ngOnInit(): void {
    this.todo = tassign(this.todo, {
      ...this.originalTodo
    });
  }

  completeTodo(): void {
    if (this.editMode) {
      return;
    }

    if (!this.todo.isCompleted) {
      this.toggleTodo();
      this.updateTodo();
    }
  }

  enableEditMode(): void {
    if (this.todo.timesEdited > 1) {

    } else {
      const pwCheckSubscription = this.openValidateSupervisorPasswordDialog(
        { option: 'editável', times: this.todo.timesEdited }
      ).afterClosed()
        .subscribe((isValid: boolean) => {
          if (isValid) {
            this.currentContent = this.todo.content;
            this.editMode = true;
          }
        });

      this.subscriptions.push(pwCheckSubscription);
    }
  }

  returnTodo(): void {
    if (this.todo.timesCompleted > 2) {

    } else {
      this.openValidateSupervisorPasswordDialog(
        { option: 'pendente', times: this.todo.timesCompleted }
      ).afterClosed()
        .subscribe((isValid: boolean) => {
          if (isValid) {
            this.toggleTodo();
            this.updateTodo();
          }
        });
    }
  }

  updateCurrentContent(
    content: string
  ): void {
    this.currentContent = content;
  }

  saveChanges(): void {
    this.todo.content = this.currentContent;
    this.incrementTimesEdited();
    this.updateTodo();
    this.editMode = false;
  }

  discardChanges(): void {
    this.currentContent = null;
    this.editMode = false;
  }

  pinTodo(): void {
    this.todo.isPinned = !this.todo.isPinned;
    this.updateTodo();
  }

  todoIsAvailable(): boolean {
    return !this.todo.isCompleted && !this.editMode;
  }

  updateTodo(): void {
    const updateSubscription = this.service.update(this.todo)
      .subscribe();

    this.subscriptions.push(updateSubscription);
  }

  private toggleTodo(): void {
    if (!this.todo.isCompleted) {
      this.incrementTimesCompleted();
    }
    this.toggleIsCompleted();
  }

  private toggleIsCompleted(): void {
    this.todo.isCompleted = !this.todo.isCompleted;
  }

  private openValidateSupervisorPasswordDialog(
    data: { option: string, times: number },
  ): MatDialogRef<ValidateSupervisorPasswordComponent> {

    return this.dialog.open(ValidateSupervisorPasswordComponent, {
      height: '300px',
      width: '500px',
      data
    });

  }

  private incrementTimesCompleted(): void {
    this.todo.timesCompleted++;
  }

  private incrementTimesEdited(): void {
    this.todo.timesEdited++;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    })
  }
}
