/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { View, Layout } from '../common-models/common';

import {
  AccountingOperationViews,
  UnauthorizedViews
} from './views.config';


export type LayoutType = 'AccountingOperation' | 'AccountingDashboards' | 'AccountingReports' |
                         'AccountingCataloguesAndRules' | 'Management' | 'Unauthorized';


export const APP_VIEWS: View[] = AccountingOperationViews.concat(UnauthorizedViews);                                                                                                            
                                                                 


export const APP_LAYOUTS: Layout[] = [
  {
    name: 'AccountingOperation',
    views: AccountingOperationViews,
    hint: 'Registro de volantes y operación contable',
    defaultTitle: 'Operación contable'
  },

  
  {
    name: 'Unauthorized',
    views: UnauthorizedViews,
    hint: '',
    defaultTitle: ''
  },
];
