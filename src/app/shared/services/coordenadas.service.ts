import { Injectable } from '@angular/core';
import { ServiceGeneric } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CoordenadasService extends ServiceGeneric {
  override urlServiceREST: string = '';

  buscarCoordenadas(address: string) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA9Cr3hsX48VZFQAsmzHSlscuki9Cu_9Xg`;

      return this.http.get<any>(url);
    }
}
