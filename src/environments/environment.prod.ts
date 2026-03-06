export const environment = {
  production: true,
  oauth: {
    redirectUri: 'https://turify.com.br/dashboard',  // Ajustado para match do Google Console
    postLogoutRedirectUri: 'https://turify.com.br/login',
    silentRefreshRedirectUri: 'https://turify.com.br/silent-refresh.html'
  }
};
