import { APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule, NgbNavModule, NgbDropdownModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ROUTES } from './app.routes'
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { ToastrModule } from 'ngx-toastr';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { AuthInterceptor } from './shared/services/interceptor';
import { authConfig } from '../auth.config';

// Função para inicializar OAuth2
export function initializeOAuth(oauthService: OAuthService): () => Promise<void> {
  return (): Promise<void> => {
    return new Promise<void>((resolve) => {
      oauthService.configure(authConfig);
      oauthService.setupAutomaticSilentRefresh();
      oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
        resolve();
      });
    });
  };
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    NgbDropdownModule,
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['https://api.turify.com.br/api'], // sua API
        sendAccessToken: true
      }
    })
  ],
  providers: [
    NgbDropdown,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeOAuth,
      deps: [OAuthService],
      multi: true
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }
