import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroModel } from '../models/cadastro.model';
import { ServiceGeneric } from './generic.service';
import { ItensMetaModel } from '../models/meta.model';

@Injectable({
  providedIn: 'root'
})
export class MetaService extends ServiceGeneric {
  override urlServiceREST: string = "https://localhost:44383/api/Metas";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doCadastraMeta(meta: ItensMetaModel): Observable<string>{
    return this.http.post(this.urlServiceREST, meta, { responseType: 'text'});
  }

  doGetMetas(userId: string): Observable<ItensMetaModel[]>{
    return this.http.get<ItensMetaModel[]>(this.urlServiceREST, {params: {userId}});
  }

  doDeleteMeta(id: string): Observable<string>{
    return this.http.delete(this.urlServiceREST + "/" +id, { responseType: 'text'});
  }

  doPatchMeta(id: string): Observable<Object>{
    return this.http.patch(this.urlServiceREST + "/" +id, { responseType: 'text'});
  }
}
