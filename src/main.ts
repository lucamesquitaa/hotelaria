
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SessionInterceptor } from './app/shared/services/session.interceptor';
import { ROUTES } from './app/app.routes';
import { importProvidersFrom, inject, LOCALE_ID, provideAppInitializer } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(ROUTES),
    /*AppConfigService,
    provideAppInitializer(()=> {
      const appConfig = inject(AppConfigService);
      return appConfig.load();
    }),*/
    { provide: HTTP_INTERCEPTORS, useClass: SessionInterceptor, multi: true }]
});
