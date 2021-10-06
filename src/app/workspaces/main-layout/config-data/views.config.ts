/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { View } from '../common-models/common';


export const AccountingOperationViews: View[] = [
  {
    name: 'AccountingOperation.MyInbox',
    title: 'Registro Poliza',
    url: '/operacion-contable/mis-volantes-pendientes'
  },
  {
    name: 'AccountingOperation.MyInbox',
    title: 'Endosos',
    url: '/operacion-contable/mis-volantes-pendientes'
  },

];


export const UnauthorizedViews: View[] = [
  {
    name: 'Unauthorized',
    title: '',
    url: '/unauthorized'
  },
];
