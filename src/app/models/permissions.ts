/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */


export enum PermissionsLibrary {
  ROUTE_INSURANCE_CONTRACTS = 'route-operacion-contable',
  MENU_OPERACION_CONTABLE = 'menu-operacion-contable',
  FEATURE_VOUCHERS_ADD = 'feature-vouchers-add',
}


export const ROUTES_LIBRARY = {

  // #region app-routing module

  insurance_contracts: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: '',
    path: 'polizas'
  },

  payments: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: '',
    path: 'pagos'
  },

  claims: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: '',
    path: 'siniestros'
  },

  commissions: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: '',
    path: 'comisiones'
  },

  security: {
    parent: '',
    path: 'security',
  },

  unauthorized: {
    parent: '',
    path: 'unauthorized',
  },

  // #endregion

  // #region accounting-operation-routing module

  insurance_contracts_contracts: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: 'polizas',
    path: 'registro',
  },


  insurance_contracts_amends: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: 'polizas',
    path: 'endosos',
  },

  // #endregion


  payments_main: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: 'pagos',
    path: 'registro',
  },

  payments_receivables: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: 'pagos',
    path: 'cobranza',
  },



  claims_main: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: 'siniestros',
    path: 'registro',
  },

  claims_payments: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: 'siniestros',
    path: 'pagos',
  },



  commissions_payments: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: 'comisiones',
    path: 'estados-cuenta',
  },


  commissions_agents: {
    permission: PermissionsLibrary.ROUTE_INSURANCE_CONTRACTS,
    parent: 'comisiones',
    path: 'agentes',
  },



  // #region security-routing module

  security_login: {
    parent: 'security',
    path: 'login',
  },

  // #endregion

};


export const DEFAULT_ROUTE = ROUTES_LIBRARY.insurance_contracts_contracts;


export const DEFAULT_URL = ( DEFAULT_ROUTE.parent ? DEFAULT_ROUTE.parent + '/' : '' ) + DEFAULT_ROUTE.path;


export const UNAUTHORIZED_ROUTE = ROUTES_LIBRARY.unauthorized.path;


export const ROUTES_LIST = Object.keys(ROUTES_LIBRARY)
                                 .map(key => ROUTES_LIBRARY[key])
                                 .filter(x => x.parent && x.permission);


// data dummy
export function getPermissionsList() {
  return Object.keys(PermissionsLibrary)
               .map(key => PermissionsLibrary[key])
               .filter(x => !x.includes('reportes'));
}
