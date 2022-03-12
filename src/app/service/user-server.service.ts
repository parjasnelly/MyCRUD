import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAPIResponse } from '../models/UserAPIResponse.model';

const APIurl = 'http://localhost:3000/user';

@Injectable()
export class UserServer {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UserAPIResponse> {
    return this.http.get<UserAPIResponse>(APIurl);
  }

  addUser(user: User): Observable<UserAPIResponse> {
    return this.http.post<UserAPIResponse>(APIurl, user);
  }

  editUser(user: User): Observable<UserAPIResponse> {
    return this.http.put<UserAPIResponse>(`${APIurl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<UserAPIResponse['message']> {
    return this.http.delete<UserAPIResponse['message']>(`${APIurl}/${id}`);
  }


}
