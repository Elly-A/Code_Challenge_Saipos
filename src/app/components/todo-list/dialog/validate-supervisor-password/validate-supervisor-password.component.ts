import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'validate-supervisor-password',
  templateUrl: './validate-supervisor-password.component.html',
  styleUrls: ['./validate-supervisor-password.component.scss']
})
export class ValidateSupervisorPasswordComponent implements OnInit {
  inputIsVisible = false;

  constructor(
    private dialogRef: MatDialogRef<ValidateSupervisorPasswordComponent>
  ) { }

  ngOnInit(): void {
  }

  validatePassword(password): void {
    if (password === 'TrabalheNaSaipos') {
      this.dialogRef.close(true);
    } else {
      this.dialogRef.close(false);
    }
  }

  toggleInputVisibility(passwordInputEl: HTMLInputElement): void {
    this.inputIsVisible = !this.inputIsVisible;

    this.inputIsVisible ?
      passwordInputEl.type = 'text' :
      passwordInputEl.type = 'password';
  }

}
