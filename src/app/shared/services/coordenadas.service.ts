import { Injectable } from '@angular/core';
import { ServiceGeneric } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CoordenadasService extends ServiceGeneric<any> {
  override urlServiceREST: string = '';

  buscarCoordenadas(address: string) {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBQgsLpPJN-4KdUElU4HCE5jZ9zv1pSyJk`;

      return this.http.get<any>(url);
    }
}
