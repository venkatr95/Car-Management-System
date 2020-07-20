import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Users } from '../models/users';
 
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getUserById(userId: number): Observable<any> {
   return this.http.get("http://localhost:3000/userData/" + userId);
  }

  getUsers() {
   return this.http.get("http://localhost:3000/userData");
  }

  addUser(user: Users): Observable<any> {
   return this.http.post("http://localhost:3000/userData", user);

  }

  deleteUser(userId: number) {
   return this.http.delete("http://localhost:3000/userData/" + userId);
  }

  editUser(user: Users) {
   return this.http.put("http://localhost:3000/userData/" + user.userId, user);
  }
}
