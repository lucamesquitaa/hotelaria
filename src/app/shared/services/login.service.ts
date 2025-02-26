import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ServiceGeneric } from './generic.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServiceGeneric {
  override urlServiceREST: string = "http://localhost:5210/api/Users";

  constructor(public override injector: Injector) {
    super(injector);
  }

  override onReceiveLiterals(): void {
  }

  doLogin(user: any): Observable<any>{
    return this.http.post<any>(this.urlServiceREST, user);
  }
  static doLogout(){
    localStorage.clear();
  }
  static getToken(){
    return localStorage.getItem('token');
  }
}
