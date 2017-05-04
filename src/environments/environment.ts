// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.


export const environment = {
  production: false,
  authentication: {
    authority: 'https://accounts.google.com',
    client_id: '423462593901-bop3o1jlsjgn807caoikjds8drr54f6d.apps.googleusercontent.com',
    client_secret: 'G1C2A7a_X2MimIIaucvDX9OB',
    redirect_uri: 'https://localhost:5443/callback.html',
    post_logout_redirect_uri: 'https://localhost:5443',
    response_type: 'code id_token token',
    scope: 'openid profile',

    silent_redirect_uri: 'https://localhost:5443/silentrefresh.html',
    automaticSilentRenew: true,
    //silentRequestTimeout:10000,

    filterProtocolClaims: true,
    loadUserInfo: true,

    metadata: {
      issuer: 'https://accounts.google.com',
      authorization_endpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
      token_endpoint: 'https://www.googleapis.com/oauth2/v4/token',
      userinfo_endpoint: 'https://www.googleapis.com/oauth2/v3/userinfo',
      revocation_endpoint: 'https://accounts.google.com/o/oauth2/revoke',
      jwks_uri: 'https://www.googleapis.com/oauth2/v3/certs',
    }

  }
};
