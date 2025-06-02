import { Injectable } from '@angular/core';
import { ServiceGeneric } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CoordenadasService extends ServiceGeneric {
  override urlServiceREST: string = '';

  buscarCoordenadas(cep: string) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cep}&key=AIzaSyCd_WvuaO1ctHDfyXhrKdgWVtaVrRfQbps`;

      return this.http.get<any>(url);
    }
}
