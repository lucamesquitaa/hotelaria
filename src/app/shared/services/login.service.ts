import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ServiceGeneric } from './generic.service';
import { Observable } from 'rxjs';
import { LoginModel, LoginResponseModel } from '../models/login.model';
import { RefreshToken } from '../models/refreshToken';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServiceGeneric {
  override urlServiceREST: string = "https://hotelaria-back-a84b6288af20.herokuapp.com/api/Login";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doLogin(user: LoginModel): Observable<LoginResponseModel>{
    return this.http.post<LoginResponseModel>(this.urlServiceREST, user);
  }
}
