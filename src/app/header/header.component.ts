import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) {}

    openDialog() {

      const newUser = {
        username: null,
        age: null,
        cep: null,
        street: null,
        number: null,
      };
      const dialogRef = this.dialog.open(UserDialogComponent, {
        width: '250px',
        data: newUser,
      });
    }

  onAddUser(){
    console.log("AddUser button pressed")
    this.openDialog()
  }

}
