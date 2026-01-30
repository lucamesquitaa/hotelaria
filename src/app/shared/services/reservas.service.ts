import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { DisponiModel, AddReservaAdd } from '../models/reserva.model';
import { ResponseApi } from '../models/response.api';
import { ServiceGeneric } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class ReservasService extends ServiceGeneric<ResponseApi<any>> {
  override urlServiceREST: string = "http://localhost:8080/api/MotorDeReservas/";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doGetReservas(quartoId: string): Observable<ResponseApi<DisponiModel>>{
    return this.http.get<ResponseApi<DisponiModel>>(this.urlServiceREST+ quartoId + "/Reserva");
  }

  doGetReservasPorPeriodo(
    quartoId: string,
    startDateIso: string,
    endDateIso: string
  ): Observable<ResponseApi<DisponiModel[]>> {
    const params = { startDate: startDateIso, endDate: endDateIso };
    return this.http.get<ResponseApi<DisponiModel[]>>(
      this.urlServiceREST + quartoId + "/Reserva",
      { params }
    );
  }

  addReservas(addDados: AddReservaAdd, quartoId: string): Observable<any>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    return this.http.post<any>(this.urlServiceREST + quartoId + "/Reserva" , addDados, { headers });
  }
 
  
}
