import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleSignInLoaderService {
  private loaded = false;

  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.loaded) {
        resolve();
        return;
      }

      // Check if already loaded globally (in case script was included in index.html)
      if (typeof google !== 'undefined') {
        this.loaded = true;
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        this.loaded = true;
        resolve();
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
}