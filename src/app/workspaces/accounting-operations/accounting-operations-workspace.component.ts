/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Assertion, EventInfo } from '@app/core';

import { PresentationLayer, SubscriptionHelper } from '@app/core/presentation';

import { MainUIStateSelector } from '@app/presentation/exported.presentation.types';

import { View } from '../main-layout';

import { ArrayLibrary } from '@app/shared/utils';
import { Event } from '@angular/router';

import { Contract } from '@app/models/contract';

type AccountingOperationModalOptions = 'VoucherCreator' | 'VouchersImporter';


@Component({
  selector: 'emp-fa-accounting-operations-workspace',
  templateUrl: './accounting-operations-workspace.component.html'
})
export class AccountingOperationsWorkspaceComponent implements OnInit, OnDestroy {

  currentView: View;

  displayVoucherTabbedView = false;
  displayOptionModalSelected = null;
  
  isLoading = false;
  isLoadingVoucher = false;

  subscriptionHelper: SubscriptionHelper;

  displayExportModal = false;
  excelFileUrl = '';

  selected = false;


  constructor(private uiLayer: PresentationLayer) {
    this.subscriptionHelper = uiLayer.createSubscriptionHelper();
  }


  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscriptionHelper.destroy();
  }
  

  private setDisplayExportModal(display) {
    this.displayExportModal = display;
    this.excelFileUrl = '';
  }


  private onOptionModalClosed() {
    this.displayOptionModalSelected = null;
  }

  onCreateContractEvent(envent: EventInfo) {    
    this.displayOptionModalSelected = true;
  }

  onEventCloseCreateContract(event: EventInfo) {   
    this.displayOptionModalSelected = false;   
  }

  onClose(): void {
    this.selected = false;   
  }

  onSelectedContractEvent(event: EventInfo) {
     this.selected = true;    
  }


 }
