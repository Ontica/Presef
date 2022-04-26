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

  title = "";
  @Output() selectContractEvent = new EventEmitter<EventInfo>();

  constructor(private uiLayer: PresentationLayer, 
              private contractDataService: ContractDataService) {
    this.subscriptionHelper = uiLayer.createSubscriptionHelper();
  }


  ngOnInit() {
   this.loadContractsList();
  }


  ngOnDestroy() {
    this.subscriptionHelper.destroy();
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

  onContractCreatorEvent(contract: ContractFields) {
    this.contractDataService.createContract(contract).
    subscribe(x => {  this.displayOptionModalSelected = false; 
      this.loadContractsList(); });
    
  }

  onClose(): void {
    this.selected = false;   
  }

  onDeleteContract(uid: string) {
    this.contractDataService.deleteContract(uid).subscribe( x=> {alert("Borrado")});
    this.selected = false;
    this.loadContractsList();
    
  }

  onSelectedContractEvent(event:  Contract) {
     this.selected = true;  
     this.contract = event;   
     this.title = this.contract.contractNo;
  }

  onUpdateContract(contractFields: ContractFields): void {      
    this.contractDataService.updateContract(contractFields).
          subscribe(x => this.contract = x);
          
    this.loadContractsList();    
  }

 }

 