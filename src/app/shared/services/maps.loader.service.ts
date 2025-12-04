// maps-loader.service.ts
import { Injectable, Injector } from '@angular/core';
import { ServiceGeneric } from './generic.service'; // Adjust the path if needed

@Injectable({
  providedIn: 'root'
})
export class MapsLoaderService extends ServiceGeneric<any>{
  override urlServiceREST: string = "";
  private loaded = false;

  
  constructor(public override injector: Injector) {
    super(injector);
  }
  
  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loaded) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA9Cr3hsX48VZFQAsmzHSlscuki9Cu_9Xg';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.loaded = true;
        resolve();
      };
      script.onerror = reject;
      document.body.appendChild(script);
    });
  }
}
