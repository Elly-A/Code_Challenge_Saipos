import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Todo } from 'src/app/interfaces/todo.interface';
import { ValidateSupervisorPasswordComponent } from '../dialog/validate-supervisor-password/validate-supervisor-password.component';

@Component({
  selector: 'single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0, width: '0' }),
            animate('1s cubic-bezier(0.075, 0.82, 0.165, 1)',
              style({ opacity: 1, width: '*' }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1, width: '*' }),
            animate('.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
              style({ opacity: 0, width: '0' }))
          ]
        ),
      ]
    ),
  ]
})
export class SingleTodoComponent implements OnInit {
  @Input() todo: Todo;

  isComplete = false;
  editMode = false;
  private passwordValid = false;
  private currentContent: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  todoIsAvailable(): boolean {
    return !this.isComplete && !this.editMode;
  }

  completeTodo(): void {
    if (this.editMode) {
      return;
    }

    if (!this.isComplete) {
      this.toggleTodo();
    } else {
      if (this.todo.timesCompleted > 2) {
        this.showLimitOfTimesCompletedWarning();
      } else {
        if (this.openValidateSupervisorPasswordDialog()) {
          this.toggleTodo();
        } else {
          this.showBadPasswordWarning();
        }
      }
    }
  }

  editTodo(): void {
    this.openValidateSupervisorPasswordDialog()
      .afterClosed()
      .subscribe((isValid: boolean) => {
        if (isValid) {
          this.currentContent = this.todo.content;
          this.editMode = true;
        } else {
          this.showBadPasswordWarning();
        }
      });

  }

  updateCurrentContent(content: string): void {
    this.currentContent = content;
  }

  saveChanges(): void {
    this.todo.content = this.currentContent;
    this.editMode = false;
  }

  discardChanges(): void {
    this.currentContent = null;
    this.editMode = false;
  }

  private toggleTodo(): void {
    if (!this.isComplete) {
      this.incrementTimesCompleted();
    }
    this.toggleIsComplete();
  }

  private toggleIsComplete(): void {
    this.isComplete = !this.isComplete;
  }

  private openValidateSupervisorPasswordDialog(): MatDialogRef<ValidateSupervisorPasswordComponent> {
    return this.dialog.open(ValidateSupervisorPasswordComponent, {
      height: '1000px'
    });
  }

  private showBadPasswordWarning(): void {
    console.log('badpassword');
  }

  private incrementTimesCompleted(): void {
    this.todo.timesCompleted++;
  }

  private showLimitOfTimesCompletedWarning(): void {
    console.log('limit reached');
  }
}
