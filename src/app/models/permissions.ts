/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */


export enum PermissionsLibrary {
  ROUTE_OPERACION_CONTABLE = 'route-operacion-contable',  
  MENU_OPERACION_CONTABLE = 'menu-operacion-contable',
  FEATURE_VOUCHERS_ADD = 'feature-vouchers-add',
}


export const ROUTES_LIBRARY = {

  // #region app-routing module

  operacion_contable: {
    permission: PermissionsLibrary.ROUTE_OPERACION_CONTABLE,
    parent: '',
    path: 'operacion-contable'
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

  operacion_contable_mis_volantes_pendientes: {
    permission: PermissionsLibrary.ROUTE_OPERACION_CONTABLE,
    parent: 'operacion-contable',
    path: 'mis-volantes-pendientes',
  },
  // #endregion

  
  // #region security-routing module

  security_login: {
    parent: 'security',
    path: 'login',
  },

  // #endregion

};


export const DEFAULT_ROUTE = ROUTES_LIBRARY.operacion_contable_mis_volantes_pendientes;


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
