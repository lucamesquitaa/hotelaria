import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceGeneric } from './generic.service';
import { DetalhesModel } from '../models/hotel.model';
import { HoteisAllModel } from '../models/hoteisAll.model';

@Injectable({
  providedIn: 'root'
})
export class HotelService extends ServiceGeneric {
  override urlServiceREST: string = "https://hotelaria-back-a84b6288af20.herokuapp.com/api/Hotel";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doGetAllHoteis(): Observable<HoteisAllModel[]>{
    return this.http.get<HoteisAllModel[]>(this.urlServiceREST);
  }

  doGetHotelId(hotelId: string): Observable<DetalhesModel[]>{
    return this.http.get<DetalhesModel[]>(this.urlServiceREST +"/" + hotelId);
  }

  // doDeleteMeta(id: string): Observable<string>{
  //   return this.http.delete(this.urlServiceREST + "/" +id, { responseType: 'text'});
  // }

  // doPatchMeta(id: string): Observable<Object>{
  //   return this.http.patch(this.urlServiceREST + "/" +id, { responseType: 'text'});
  // }
}
