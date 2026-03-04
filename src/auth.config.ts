import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  clientId: '838656343224-8cr24hdeobtu00kevkhj27sudbuq8g97.apps.googleusercontent.com',
  redirectUri: window.location.origin + '/login',
  scope: 'openid profile email',
  responseType: 'code',
  showDebugInformation: true
};