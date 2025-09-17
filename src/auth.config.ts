import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
  issuer: 'https://accounts.google.com', // endpoint OIDC do Google
  strictDiscoveryDocumentValidation: false,
  clientId: '54700728866-d81aiuid54e66ju93oia449v9dkcs357.apps.googleusercontent.com',
  redirectUri: 'http://localhost:4200',
  scope: 'openid profile email',
  responseType: 'code', // usa PKCE
  showDebugInformation: true,
  dummyClientSecret: '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'
};