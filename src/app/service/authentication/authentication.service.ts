import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from 'rxjs/operators';


import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.server;
  }

  login(user) {
    return this.http.post<any>(`${this.url}/auth`, { 'username': user.username, 'password': user.password })
      .pipe(
        map(user => {
          if (user && user.token) {
            localStorage.setItem('crowdify_currentUser', JSON.stringify(user));
          }
          return user;
        })
      );
  }

  logout() {
    localStorage.removeItem('crowdify_currentUser');
  }

  getCurrent() {
    let _user = localStorage.getItem('crowdify_currentUser');
    return JSON.parse(_user);
  }
}
