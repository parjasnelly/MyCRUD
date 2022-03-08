import {Component, OnInit} from '@angular/core';
import { User } from '../models/user.model'

import { UserServer } from '../user-server.service';




/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserList implements OnInit {
  displayedColumns: string[] = ['name', 'age', 'street','number', 'cep', 'buttons'];
  userServer: UserServer;
  dataSource: User[] = [];
  
  constructor(userServer: UserServer){
    this.userServer = userServer;
  }

  ngOnInit(): void {
    this.dataSource = this.userServer.getUsers();
  }


  onEditUser(){
    // Lógica para editar user
  }

  onDeleteUser(){
    // Lógica para remover user
  }
}
