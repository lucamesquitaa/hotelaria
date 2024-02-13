import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, User } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'http://localhost:5210/api/Users';
  constructor(private http: HttpClient) { }

  doLogin(user: User){
    let data = this.http.post<LoginModel>(this.url, user);
    data.subscribe((result) => {
      localStorage.setItem('token', result.token);
    })
  }
  doLogout(){
    localStorage.clear();
  }
  static getToken(){
    return localStorage.getItem('token');
  }
}
