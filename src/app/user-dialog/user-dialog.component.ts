import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  User!: User;
  isChange!: boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: User,
    public dialogRef: MatDialogRef<UserDialogComponent>
  ) {}
  ngOnInit(): void {
    if (this.data.id != null) this.isChange = true;
  }

  onHandleCancelClick(): void {
    this.dialogRef.close();
  }

}
