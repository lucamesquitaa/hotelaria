import { HttpHeaders } from '@angular/common/module.d-CnjH8Dlt';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryQuartosModel } from '../models/categoryQuartos.model';
import { ResponseApi } from '../models/response.api';
import { ServiceGeneric } from './generic.service';
import { DisponiModel } from '../models/reserva.model';

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

  
 
  
}
