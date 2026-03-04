import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', // endpoint OIDC do Google
  strictDiscoveryDocumentValidation: false,
  clientId: '838656343224-8cr24hdeobtu00kevkhj27sudbuq8g97.apps.googleusercontent.com',
  redirectUri: 'https://turify.com.br',
  scope: 'openid profile email',
  responseType: 'code', // usa PKCE
  showDebugInformation: true
};