import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

import { UserResponse } from '../models/serverResponse.model';
import { User } from '../models/user.model';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

import { UserServer } from '../user-server.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserList implements OnInit {
  displayedColumns: string[] = [
    'name',
    'email',
    'phoneNumber',
    'address',
    'buttons',
  ];
  userServer: UserServer;
  dataSource: User[] = [];

  constructor(userServer: UserServer, public dialog: MatDialog) {
    this.userServer = userServer;
  }

  ngOnInit(): void {
    this.updateList();
  }

  onAddUser() {
    const newUser = {
      name: null,
      email: null,
      phoneNumber: null,
      address: null,
    };
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data: newUser,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.userServer.createUser(result).subscribe(() => {
          this.updateList();
        });
      }
    });
  }

  updateList() {
    this.userServer.getAllUsers().subscribe((data: UserResponse) => {
      this.dataSource = data.data;
    });
  }

  onEditUser(user: User) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px',
      data: { ...user },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editUser(result);
      }
    });
  }

  editUser(user: User) {
    this.userServer.editUser(user).subscribe(() => {
      this.updateList();
    });
  }

  onDeleteUser(user: User) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      disableClose: false,
    });
    dialogRef.componentInstance.confirmMessage = `Você realmente deseja remover o usuário ${user.name} ?`;

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteUser(user.id);
      }
    });
  }

  deleteUser(uid: number) {
    this.userServer.deleteUser(uid).subscribe(() => {
      this.updateList();
    });
  }
}
