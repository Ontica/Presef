/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

 import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

 import { Assertion, EventInfo } from '@app/core';
 
 import { ContractDataService } from '@app/data-services/contract.data.service';
 import { Contract, EmptyContract } from '@app/models/contract';
 

 @Component({
   selector: 'insurance-contract',
   templateUrl: './insurance-contract.component.html',
   styleUrls:['./insurance-contract.component.css']
 })
 
 export class InsuranceContractComponent implements OnInit {
  
   @Input() contractsList : Contract[]; 

   @Output() createContractEvent = new EventEmitter();
   
   @Output() selectedContractEvent = new EventEmitter();
      
   
    displayedColumns: string[] = ['Poliza', 'Parties', 'ContractType', 'EmissionDate','Status'];
    dataSource : Contract[];
    selectedRow =  EmptyContract;
    

   constructor(private contractDataService: ContractDataService){}

   ngOnInit(): void {} 


   onClickCreateContract(): void {     
    this.createContractEvent.emit();      
   }


   onClickListItem(row: Contract) {
     this.selectedRow = row;
     this.selectedContractEvent.emit(row);    
   }
 
 
 }
 