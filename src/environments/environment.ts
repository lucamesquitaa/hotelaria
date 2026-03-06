export const environment = {
  production: false,
  oauth: {
    redirectUri: 'http://localhost:4200/dashboard',
    postLogoutRedirectUri: 'http://localhost:4200/login',
    silentRefreshRedirectUri: 'http://localhost:4200/silent-refresh.html'
  }
};
