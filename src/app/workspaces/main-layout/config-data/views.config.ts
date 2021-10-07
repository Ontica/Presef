/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { View } from '../common-models/common';


export const InsuranceContractsViews: View[] = [
  {
    name: 'InsuranceContracts.Main',
    title: 'Registro de pólizas',
    url: '/polizas/registro'
  },
  {
    name: 'InsuranceContracts.Amends',
    title: 'Endosos',
    url: '/polizas/endosos'
  },
];


export const PaymentsViews: View[] = [
  {
    name: 'Payments.Main',
    title: 'Registro de pagos',
    url: '/pagos/registro'
  },
  {
    name: 'Payments.Receivables',
    title: 'Cobranza',
    url: '/pagos/cobranza'
  },
];


export const ClaimsViews: View[] = [
  {
    name: 'Claims.Main',
    title: 'Registro de siniestros',
    url: '/siniestros/registro'
  },
  {
    name: 'Claims.Payment',
    title: 'Pago de siniestros',
    url: '/siniestros/pagos'
  },
];


export const CommissionsViews: View[] = [
  {
    name: 'Commissions.Main',
    title: 'Pago de comisiones',
    url: '/comisiones/estados-cuenta'
  },
  {
    name: 'Commissions.Agents',
    title: 'Registro de agentes',
    url: '/comisiones/agentes'
  }
];


export const UnauthorizedViews: View[] = [
  {
    name: 'Unauthorized',
    title: '',
    url: '/unauthorized'
  },
];
