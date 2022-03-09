import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserResponse } from './models/serverResponse.model';

const APIurl = 'http://localhost:3000/user';

@Injectable()
export class UserServer {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserResponse> {
    return this.http.get<UserResponse>(APIurl);
  }

  createUser(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(APIurl, user);
  }

  editUser(user: User): Observable<UserResponse> {
    return this.http.put<UserResponse>(APIurl, user);
  }

  deleteUser(id: number): Observable<UserResponse['message']> {
    return this.http.delete<UserResponse['message']>(`${APIurl}/${id}`);
  }


}
