import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

import { UserAPIResponse } from '../models/UserAPIResponse.model';
import { User } from '../models/user.model';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

import { UserServer } from '../service/user-server.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(userServer: UserServer, public dialog: MatDialog, private snackBar: MatSnackBar) {
    this.userServer = userServer;
  }

  ngOnInit(): void {
    this.updateList();
  }

  onAddUser() {

    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '300px',
      data: {
        name: null,
        email: null,
        phoneNumber: null,
        address: null,
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.userServer.addUser(result).subscribe(() => {
          this.updateList();
          this.snackBar.open("Usuário adicionado com sucesso!", undefined, {
            duration: 1500,
            verticalPosition: 'top',
            horizontalPosition: 'center',
          } );
        });
      }

    });
  }

  updateList() {
    this.userServer.getAllUsers().subscribe((data: UserAPIResponse) => {
      this.dataSource = data.data;
    });
  }

  onEditUser(user: User) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '300px',
      data: { ...user },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.editUser(result);
        this.snackBar.open("Usuário editado com sucesso!", undefined, {
          duration: 1500,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        } );
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
        this.snackBar.open("Usuário excluído com sucesso!", undefined, {
          duration: 1500,
          verticalPosition: 'top',
          horizontalPosition: 'center',
        } );
      }
    });
  }

  deleteUser(uid: number) {
    this.userServer.deleteUser(uid).subscribe(() => {
      this.updateList();
    });
  }
}
