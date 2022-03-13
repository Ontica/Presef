/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

 import { Component, OnInit, Output, EventEmitter } from '@angular/core';

 import { Assertion, EventInfo } from '@app/core';
 
 import { ContractDataService } from '@app/data-services/contract.data.service';
 import { Contract } from '@app/models/contract';
  

 @Component({
   selector: 'insurance-contract',
   templateUrl: './insurance-contract.component.html',
 })
 export class InsuranceContractComponent implements OnInit {
 
   @Output() createContractEvent = new EventEmitter();
   
    displayedColumns: string[] = ['Poliza', 'Parties', 'ContractType', 'EmissionDate','Status'];
    dataSource: Contract[];
    clickedRows = new Set<Contract>();

   constructor(private contractDataService: ContractDataService){}

   ngOnInit(): void {
     this.contractDataService.getContracts()
      .subscribe(x => {this.dataSource = x; console.log(this.dataSource)});
   } 

   onClickCreateContract(): void {
    this.createContractEvent.emit();
   }


   onClickListItem(row: Contract) {

   }
 
 
 }
 