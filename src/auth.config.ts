import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', // endpoint OIDC do Google
  strictDiscoveryDocumentValidation: false,
  clientId: '167620261725-hpe1ram422hksd64t7fp5to7gbthf4cr.apps.googleusercontent.com',
  redirectUri: 'http://149.57.203.34:8080',
  scope: 'openid profile email',
  responseType: 'code', // usa PKCE
  showDebugInformation: true,
  dummyClientSecret: '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'
};