/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { SecurityGuard } from './core';

import { DEFAULT_URL, ROUTES_LIBRARY } from './models';

import { MainLayoutComponent, NoContentComponent } from './workspaces/main-layout';

const routes: Routes = [
  {
    data: { permission: ROUTES_LIBRARY.insurance_contracts.permission },
    path: ROUTES_LIBRARY.insurance_contracts.path,
    component: MainLayoutComponent,
    canActivate: [SecurityGuard],
    canActivateChild: [SecurityGuard],
    loadChildren: () => import('./workspaces/accounting-operations/accounting-operations-workspace.module')
                              .then((m) => m.AccountingOperationsWorkspaceModule)
  },
  {
    data: { permission: ROUTES_LIBRARY.payments.permission },
    path: ROUTES_LIBRARY.payments.path,
    component: MainLayoutComponent,
    canActivate: [SecurityGuard],
    canActivateChild: [SecurityGuard],
    loadChildren: () => import('./workspaces/accounting-operations/accounting-operations-workspace.module')
                              .then((m) => m.AccountingOperationsWorkspaceModule)
  },
  {
    data: { permission: ROUTES_LIBRARY.claims.permission },
    path: ROUTES_LIBRARY.claims.path,
    component: MainLayoutComponent,
    canActivate: [SecurityGuard],
    canActivateChild: [SecurityGuard],
    loadChildren: () => import('./workspaces/accounting-operations/accounting-operations-workspace.module')
                              .then((m) => m.AccountingOperationsWorkspaceModule)
  },
  {
    data: { permission: ROUTES_LIBRARY.commissions.permission },
    path: ROUTES_LIBRARY.commissions.path,
    component: MainLayoutComponent,
    canActivate: [SecurityGuard],
    canActivateChild: [SecurityGuard],
    loadChildren: () => import('./workspaces/accounting-operations/accounting-operations-workspace.module')
                              .then((m) => m.AccountingOperationsWorkspaceModule)
  },
  {
    path: ROUTES_LIBRARY.unauthorized.path,
    canActivate: [SecurityGuard],
    component: MainLayoutComponent,
    loadChildren: () => import('./views/unauthorized/unauthorized.module')
                              .then(m => m.UnauthorizedModule)
  },
  {
    path: ROUTES_LIBRARY.security.path,
    loadChildren: () => import('./views/security/security-ui.module')
                              .then(m => m.SecurityUIModule)
  },
  { path: '', redirectTo: DEFAULT_URL, pathMatch: 'full' },
  { path: '**', component: NoContentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
