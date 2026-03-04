import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceGeneric } from './generic.service';
import { QuartosModel } from '../models/quartos.model';
import { HoteisAllModel } from '../models/hoteisAll.model';
import { HttpHeaders } from '@angular/common/http';
import { ManagersModel } from '../models/managers.model';
import { ResponseApi } from '../models/response.api';

@Injectable({
  providedIn: 'root'
})
export class QuartosService extends ServiceGeneric<ResponseApi<any>> {
  //override urlServiceREST: string = "https://hotelaria-vstudio2022-54700728866.us-central1.run.app/api/Hotel";
  override urlServiceREST: string = "http://149.57.203.34:8080/api/Quartos";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doGetQuartosByHotelId(hotelId: string): Observable<ResponseApi<QuartosModel[]>>{
    return this.http.get<ResponseApi<QuartosModel[]>>(this.urlServiceREST +"/GetAllQuartos/" + hotelId);
  }

  GetQuartoById(id: string): Observable<ResponseApi<QuartosModel>>{
    return this.http.get<ResponseApi<QuartosModel>>(this.urlServiceREST +"/GetQuartoById/" + id);
  }

  doPostPutQuarto(quarto: QuartosModel, hotelId: string): Observable<ResponseApi> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
  
    return this.http.post<ResponseApi>(this.urlServiceREST +"/PostPutQuartos/" + hotelId , quarto, { headers });
    
  }
  doDeleteQuarto(quartoId: string, hotelId: string): Observable<ResponseApi> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));

    return this.http.delete<ResponseApi>(`${this.urlServiceREST}/DeleteQuarto/${hotelId}/${quartoId}`, { headers });
  }
}
