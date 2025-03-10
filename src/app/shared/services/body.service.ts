import { Injectable, Injector } from '@angular/core';
import { ServiceGeneric } from './generic.service';
import { Observable } from 'rxjs';
import { ItensBodyModel } from '../models/body.model';

@Injectable({
  providedIn: 'root'
})
export class BodyService extends ServiceGeneric {
  override urlServiceREST: string = "https://localhost:44383/api/Body";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doCadastraBody(body: ItensBodyModel): Observable<string>{
    return this.http.post(this.urlServiceREST, body, { responseType: 'text'});
  }

  doGetBodys(userId: string): Observable<ItensBodyModel[]>{
    return this.http.get<ItensBodyModel[]>(this.urlServiceREST, {params: {userId}});
  }

  doDeleteBody(id: string): Observable<string>{
    return this.http.delete(this.urlServiceREST + "/" +id, { responseType: 'text'});
  }

}
