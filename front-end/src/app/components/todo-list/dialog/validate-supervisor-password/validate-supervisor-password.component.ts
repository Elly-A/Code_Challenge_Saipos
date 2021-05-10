import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SupervisorCheckService } from 'src/app/services/supervisor-check.service';
import { CustomValidator } from '../../../../util/validators/Validator';

@Component({
  selector: 'validate-supervisor-password',
  templateUrl: './validate-supervisor-password.component.html',
  styleUrls: ['./validate-supervisor-password.component.scss']
})
export class ValidateSupervisorPasswordComponent implements OnInit {

  inputIsVisible = false;
  passwordForm = this.fb.group({
    password: ['']
  });
  passwordChecked = false;
  passwordIsValid = false;

  constructor(
    private dialogRef: MatDialogRef<ValidateSupervisorPasswordComponent>,
    private fb: FormBuilder,
    private supervisorService: SupervisorCheckService,
    @Inject(MAT_DIALOG_DATA) public data: { option: string, times: number }
  ) { }

  ngOnInit(): void {
  }

  validatePassword(): void {
    this.passwordChecked = true;
    if (
      this.supervisorService.validate(
        this.passwordForm.get('password').value
      )
    ) {
      this.passwordIsValid = true;
      this.dialogRef.close(this.passwordIsValid);
    }
  }

  toggleInputVisibility(passwordInputEl: HTMLInputElement): void {
    this.inputIsVisible = !this.inputIsVisible;

    this.inputIsVisible ?
      passwordInputEl.type = 'text' :
      passwordInputEl.type = 'password';
  }

  getAvailableActionNumber(): number {
    if (this.data.option === 'pendente') {
      if (this.data.times === 1) {
        return 2;
      } else if (this.data.times === 2) {
        return 1;
      }
    }

    if (this.data.option === 'editável') {
      if (this.data.times === 0) {
        return 2;
      } else if (this.data.times === 1) {
        return 1;
      }
    }
  }

}
