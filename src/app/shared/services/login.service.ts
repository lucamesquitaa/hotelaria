import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { ServiceGeneric } from './generic.service';
import { Observable } from 'rxjs';
import { LoginModel, LoginResponseModel, ResultLoginModel } from '../models/login.model';
import { ManagersModel } from '../models/managers.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends ServiceGeneric {
  //override urlServiceREST: string = "https://hotelaria-vstudio2022-54700728866.us-central1.run.app/api/Login";
   override urlServiceREST: string = "http://localhost:8080/api/User";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doLogin(user: ResultLoginModel): Observable<LoginResponseModel>{
    console.log("Fazendo login para o usuário:", user);
    return this.http.post<LoginResponseModel>(this.urlServiceREST + "/Login", user);
  }

  updateManager(email: string, hotelId: string): Observable<any> {
    const url = this.urlServiceREST + '/UpdateManager';
    const body = { email, hotelId };
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
  
    return this.http.post<any>(url, body, { headers });
  }

   GetAllPermissionUsers(hotelId: string): Observable<ManagersModel[]> {
    return this.http.post<ManagersModel[]>(this.urlServiceREST + "/GetAllPermissionUsers", {hotelId});
  }
}
