import { Injectable } from '@angular/core';
import { ContextModel } from '../models/context.model';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  private static context : ContextModel = <ContextModel>{
    usuarioAutenticado: false,
    usuario: {
      photo: "",
      userCode: "",
      name: "",
      darkMode: false,
    },
    cart: {
      number: 0,
      products: []
    },
  };

  static getContext(): ContextModel{
    return ContextService.context;
  }
}
