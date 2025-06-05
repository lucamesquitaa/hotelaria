import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceGeneric } from './generic.service';
import { DetalhesModel } from '../models/hotel.model';
import { HoteisAllModel } from '../models/hoteisAll.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService extends ServiceGeneric {
  override urlServiceREST: string = "https://hotelaria-vstudio2022-54700728866.us-central1.run.app/api/Hotel";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doGetAllHoteis(): Observable<HoteisAllModel[]>{
    return this.http.get<HoteisAllModel[]>(this.urlServiceREST);
  }

  doGetHotelId(hotelId: string): Observable<DetalhesModel[]>{
    return this.http.get<DetalhesModel[]>(this.urlServiceREST +"/" + hotelId);
  }

  doDeleteHotel(id: string): Observable<string>{
    //setar token Authorization
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    
    return this.http.delete<any>(this.urlServiceREST + "/" +id, { headers});
  }

  doPostHotel(hotel: DetalhesModel, id?: string): Observable<DetalhesModel> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.cookieService.get('access_token'));
    if (id == undefined) {
      return this.http.post<DetalhesModel>(this.urlServiceREST, hotel, { headers });
    } else {
      return this.http.put<DetalhesModel>(this.urlServiceREST + "/" + id, hotel, { headers });
    }
  }

  
}
