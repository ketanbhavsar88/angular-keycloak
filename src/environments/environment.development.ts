export const environment = {
  production: false,
  keycloak: {
    authority: 'https://usw2.auth.ac/auth', // Keycloack server
    redirectUri: 'http://localhost:4200', // redirect
    postLogoutRedirectUri: 'http://localhost:4200/logout', // post logout url
    realm: 'dnexporttest',
    clientId: 'angular-app',
  },
};
