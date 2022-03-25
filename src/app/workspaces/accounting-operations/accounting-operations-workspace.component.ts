/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { Component, OnDestroy, OnInit, EventEmitter, Output} from '@angular/core';

import { Assertion, EventInfo } from '@app/core';

import { PresentationLayer, SubscriptionHelper } from '@app/core/presentation';

import { MainUIStateSelector } from '@app/presentation/exported.presentation.types';

import { View } from '../main-layout';

import { Contract, ContractFields } from '@app/models/contract';
import { ContractDataService } from '@app/data-services/contract.data.service';

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
 
  contractsList: Contract[];

  selected = false;

  contract?: Contract;

  isContracListUpdated = false;

  title = "";
  @Output() selectContractEvent = new EventEmitter<EventInfo>();

  constructor(private uiLayer: PresentationLayer, private contractDataService: ContractDataService) {
    this.subscriptionHelper = uiLayer.createSubscriptionHelper();
  }


  ngOnInit() {
   this.loadContractsList();
  }


  ngOnDestroy() {
    this.subscriptionHelper.destroy();
  }
  

  private setDisplayExportModal(display) {
    this.displayExportModal = display;
  }


  private onOptionModalClosed() {
    this.displayOptionModalSelected = null;
  }

  private loadContractsList() {

    this.contractDataService.getContracts()
      .subscribe(x => {this.contractsList = x; });
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

  onSelectedContractEvent(event:  Contract) {
     this.selected = true;  
     this.contract = event;   
     this.title = this.contract.contractNo;
  }

  onUpdateContract(): void {
    this.isContracListUpdated = true;
  }

 }
