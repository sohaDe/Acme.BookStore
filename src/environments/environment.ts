import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Whyzr',
    logoUrl: '',
  },
  // oAuthConfig: {
  //   issuer: 'https://bookstoredev.azurewebsites.net/',
   
  //   clientId: 'Whyzr_App',
  //   scope: 'offline_access Whyzr',


  // },
  // apis: {
  //   default: {
  //     url: 'https://bookstoredev.azurewebsites.net',
  //     rootNamespace: 'Whyzr',
  //   },
  // },
  oAuthConfig: {
    issuer: 'https://dev-suth.azurewebsites.net/',
    redirectUri: baseUrl,
    clientId: 'Whyzr_App',
    scope: 'offline_access Whyzr'
  },
  apis: {
    default: {
      url: 'https://develop.azurewebsites.net',
      rootNamespace: 'Whyzr'
    },
    
  },
  localization:{
    defaultResourceName:'BookStore',
    culture:'en'
  }

} as Environment;
