import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin + '/dashboard',
  postLogoutRedirectUri: window.location.origin + '/login',
  clientId: '838656343224-8cr24hdeobtu00kevkhj27sudbuq8g97.apps.googleusercontent.com',
  scope: 'openid profile email',
  responseType: 'code',
  oidc: true,
  requestAccessToken: true,
  showDebugInformation: true,
  strictDiscoveryDocumentValidation: false,
  useSilentRefresh: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html'
};