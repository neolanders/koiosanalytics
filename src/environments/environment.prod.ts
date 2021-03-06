// {
//   "web": {
//   "client_id": "423462593901-bop3o1jlsjgn807caoikjds8drr54f6d.apps.googleusercontent.com",
//     "project_id": "koiosanalytics-166502",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://accounts.google.com/o/oauth2/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_secret": "G1C2A7a_X2MimIIaucvDX9OB",
//     "redirect_uris": [
//     "https://localhost:5443/callback.html"
//   ],
//     "javascript_origins": [
//     "https://localhost:5443"
//   ]
// }
// }

export const environment = {
  production: true,
  authentication: {
    authority: 'https://accounts.google.com',
    client_id: '423462593901-bop3o1jlsjgn807caoikjds8drr54f6d.apps.googleusercontent.com',
    client_secret: 'G1C2A7a_X2MimIIaucvDX9OB',
    redirect_uri: 'https://cf-aue1-docker-node-0053.cf-cd.com:32940/callback.html',
    post_logout_redirect_uri: 'https://cf-aue1-docker-node-0053.cf-cd.com:32940',
    response_type: 'code id_token token',
    scope: 'openid profile',

    silent_redirect_uri: 'https://cf-aue1-docker-node-0053.cf-cd.com:32940/silentrefresh.html',
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
