/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { View, Layout } from '../common-models/common';

import {
  InsuranceContractsViews,
  PaymentsViews,
  ClaimsViews,
  CommissionsViews,
  UnauthorizedViews
} from './views.config';


export type LayoutType = 'InsuranceContracts' | 'Payments' | 'Claims' | 'Commissions';


export const APP_VIEWS: View[] = InsuranceContractsViews.concat(PaymentsViews, ClaimsViews, CommissionsViews, UnauthorizedViews);



export const APP_LAYOUTS: Layout[] = [
  {
    name: 'InsuranceContracts',
    views: InsuranceContractsViews,
    hint: 'Administración de pólizas y contratos',
    defaultTitle: 'Administración de pólizas'
  },
  {
    name: 'Payments',
    views: PaymentsViews,
    hint: 'Administración de pagos',
    defaultTitle: 'Administración de pagos'
  },
  {
    name: 'Claims',
    views: ClaimsViews,
    hint: 'Administración de siniestros',
    defaultTitle: 'Administración de siniestros'
  },
  {
    name: 'Commissions',
    views: CommissionsViews,
    hint: 'Administración de comisiones',
    defaultTitle: 'Administración de comisiones'
  },
  {
    name: 'Unauthorized',
    views: UnauthorizedViews,
    hint: '',
    defaultTitle: ''
  },
];
