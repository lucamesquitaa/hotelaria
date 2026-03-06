import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from './environments/environment';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: environment.oauth.redirectUri,
  postLogoutRedirectUri: environment.oauth.postLogoutRedirectUri,
  clientId: '838656343224-8cr24hdeobtu00kevkhj27sudbuq8g97.apps.googleusercontent.com',
  scope: 'openid profile email',
  responseType: 'code',
  oidc: true,
  requestAccessToken: true,
  showDebugInformation: !environment.production,
  strictDiscoveryDocumentValidation: false,
  useSilentRefresh: true,
  silentRefreshRedirectUri: environment.oauth.silentRefreshRedirectUri
};