import { Injectable, Injector } from '@angular/core';
import { ServiceGeneric } from './generic.service';
import { CadastroModel } from '../models/cadastro.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService extends ServiceGeneric {
  override urlServiceREST: string = "https://localhost:44383/api/Users/Cadastro";

  constructor(public override injector: Injector) {
    super(injector);
  }

  doCadastro(user: CadastroModel): Observable<string>{
    return this.http.post(this.urlServiceREST, user, { responseType: 'text'});
  }
}
