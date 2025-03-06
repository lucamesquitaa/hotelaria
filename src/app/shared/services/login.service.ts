import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ServiceGeneric } from './generic.service';
import { Observable } from 'rxjs';
import { LoginModel, LoginResponseModel } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServiceGeneric {
  override urlServiceREST: string = "https://localhost:44383/api/Login/login";

  constructor(public override injector: Injector) {
    super(injector);
  }

  override onReceiveLiterals(): void {
  }

  doLogin(user: LoginModel): Observable<LoginResponseModel>{
    return this.http.post<LoginResponseModel>(this.urlServiceREST, user);
  }
  static doLogout(){
    localStorage.clear();
  }
  static getToken(){
    return localStorage.getItem('token');
  }
}
