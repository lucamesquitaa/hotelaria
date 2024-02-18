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

    },
    cart: {
      number: 1,
      productsId: [],
    },
  };

  static getContext(): ContextModel{
    return ContextService.context;
  }
}
