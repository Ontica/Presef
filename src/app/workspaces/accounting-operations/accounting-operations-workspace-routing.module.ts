/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ROUTES_LIBRARY } from '@app/models';

import { AccountingOperationsWorkspaceComponent } from './accounting-operations-workspace.component';


const routes: Routes = [
  {
    data: { permission: ROUTES_LIBRARY.insurance_contracts_contracts.permission },
    path: ROUTES_LIBRARY.insurance_contracts_contracts.path,
    component: AccountingOperationsWorkspaceComponent,
  },
  {
    data: { permission: ROUTES_LIBRARY.insurance_contracts_amends.permission },
    path: ROUTES_LIBRARY.insurance_contracts_amends.path,
    component: AccountingOperationsWorkspaceComponent,
  },

  {
    data: { permission: ROUTES_LIBRARY.payments_main.permission },
    path: ROUTES_LIBRARY.payments_main.path,
    component: AccountingOperationsWorkspaceComponent,
  },
  {
    data: { permission: ROUTES_LIBRARY.payments_receivables.permission },
    path: ROUTES_LIBRARY.payments_receivables.path,
    component: AccountingOperationsWorkspaceComponent,
  },


  {
    data: { permission: ROUTES_LIBRARY.claims_main.permission },
    path: ROUTES_LIBRARY.claims_main.path,
    component: AccountingOperationsWorkspaceComponent,
  },
  {
    data: { permission: ROUTES_LIBRARY.claims_payments.permission },
    path: ROUTES_LIBRARY.claims_payments.path,
    component: AccountingOperationsWorkspaceComponent,
  },


  {
    data: { permission: ROUTES_LIBRARY.commissions_payments.permission },
    path: ROUTES_LIBRARY.commissions_payments.path,
    component: AccountingOperationsWorkspaceComponent,
  },

  {
    data: { permission: ROUTES_LIBRARY.commissions_agents.permission },
    path: ROUTES_LIBRARY.commissions_agents.path,
    component: AccountingOperationsWorkspaceComponent,
  },


  {
    path: '',
    redirectTo: ROUTES_LIBRARY.insurance_contracts_contracts.path,
    pathMatch: 'full',
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingOperationsWorkspaceRoutingModule { }
