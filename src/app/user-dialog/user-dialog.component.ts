import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css'],
})
export class UserDialogComponent implements OnInit {
  User!: User;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: User,
    public dialogRef: MatDialogRef<UserDialogComponent>
  ) {}

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo Obrigatório';
    }

    return this.email.hasError('email')
      ? 'Por Favor, insira um email válido!'
      : '';
  }
  ngOnInit(): void {
    if (this.data.id != null) this.isChange = true;
  }

  onHandleCancelClick(): void {
    this.dialogRef.close();
  }
}
