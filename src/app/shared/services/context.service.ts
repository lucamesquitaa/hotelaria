import { Injectable } from '@angular/core';
import { ContextModel } from '../models/context.model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private static context : ContextModel = <ContextModel>{
    usuarioAutenticado: false,
    token: "",
    usuario: {
      token: "",
    },
    isLoading: false
  };

  static getContext(): ContextModel{
    return ContextService.context;
  }
}
