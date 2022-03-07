import {Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  age: number;
  street: string;
  number: number;
  cep: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "name": "Compton Franco",
    "age": 29,
    "street": "Eastern Parkway",
    "number": 262,
    "cep": 1397
  },
  {
    "name": "Mattie Good",
    "age": 23,
    "street": "Herkimer Street",
    "number": 578,
    "cep": 4608
  },
  {
    "name": "Ola Merrill",
    "age": 30,
    "street": "Kent Street",
    "number": 84,
    "cep": 8150
  },
  {
    "name": "Darcy Skinner",
    "age": 39,
    "street": "Evans Street",
    "number": 287,
    "cep": 643
  },
  {
    "name": "Bettye Scott",
    "age": 26,
    "street": "Stone Avenue",
    "number": 250,
    "cep": 966
  },
  {
    "name": "Ingram Ryan",
    "age": 26,
    "street": "Lexington Avenue",
    "number": 851,
    "cep": 9815
  },
  {
    "name": "Wise Stone",
    "age": 28,
    "street": "Liberty Avenue",
    "number": 216,
    "cep": 4531
  },
  {
    "name": "Olsen Sutton",
    "age": 38,
    "street": "Cass Place",
    "number": 663,
    "cep": 4876
  },

  {
    "name": "Olsen Sutton",
    "age": 38,
    "street": "Cass Place",
    "number": 663,
    "cep": 4876
  },
  {
    "name": "Olsen Sutton",
    "age": 38,
    "street": "Cass Place",
    "number": 663,
    "cep": 4876
  },
  {
    "name": "Olsen Sutton",
    "age": 38,
    "street": "Cass Place",
    "number": 663,
    "cep": 4876
  },
  {
    "name": "Olsen Sutton",
    "age": 38,
    "street": "Cass Place",
    "number": 663,
    "cep": 4876
  },
  {
    "name": "Olsen Sutton",
    "age": 38,
    "street": "Cass Place",
    "number": 663,
    "cep": 4876
  }
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserList {
  displayedColumns: string[] = ['name', 'age', 'street','number', 'cep', 'buttons'];
  dataSource = ELEMENT_DATA;

  onEditUser(){
    // Lógica para editar user
  }

  onDeleteUser(){
    // Lógica para remover user
  }
}
