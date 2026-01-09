
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryQuartosModel } from '../models/categoryQuartos.model';
import { ResponseApi } from '../models/response.api';
import { ServiceGeneric } from './generic.service';
import { AddDisponibilidadeAdd, DisponiModel } from '../models/reserva.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeService extends ServiceGeneric<ResponseApi<any>> {
  override urlServiceREST: string = "http://localhost:8080/api/MotorDeReservas/";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doGetDisponibilidade(quartoId: string): Observable<ResponseApi<DisponiModel>>{
    return this.http.get<ResponseApi<DisponiModel>>(this.urlServiceREST+ quartoId + "/Disponibilidade");
  }

  addDisponibilidade(addDados: AddDisponibilidadeAdd, quartoId: string): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    return this.http.post<any>(this.urlServiceREST + quartoId + "/Disponibilidade" , addDados, { headers });
  }
 
  
}
