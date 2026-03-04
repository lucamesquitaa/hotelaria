import { Injectable, Injector } from '@angular/core';
import { ServiceGeneric } from './generic.service';
import { ResponseApi } from '../models/response.api';

@Injectable({
  providedIn: 'root'
})
export class PhotosService extends ServiceGeneric<ResponseApi<any>> {
  //override urlServiceREST: string = "https://hotelaria-vstudio2022-54700728866.us-central1.run.app/api/Hotel";
  override urlServiceREST: string = "http://149.57.203.34:8080/api/Photos/";

  constructor(public override injector: Injector) {
    super(injector);
  }

  getPhotos(hotelId: string) {
    let api = this.urlServiceREST + hotelId;
    return this.http.get<ResponseApi<any>>(api);
  }

  getPhotosQuarto(quartoId: string) {
    let api = this.urlServiceREST + "Quarto/" + quartoId;
    return this.http.get<ResponseApi<any>>(api);
  }

  postPhotos(formData: FormData, hotelId: string, quartoId?: string) {
    let api = this.urlServiceREST + hotelId + "/fotos";
    if (quartoId !== null && quartoId !== undefined) {
      api += `?quartoId=${quartoId}`;
    }
    return this.http.post<ResponseApi<any>>(api, formData);
  }

  deletePhotosEmLote(imgIds: string[]) {
    let api = this.urlServiceREST ;
    return this.http.delete<ResponseApi<any>>(api, { body: imgIds });
  }
}