/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

 import { Component, OnInit, Output, EventEmitter } from '@angular/core';

 import { Assertion, EventInfo } from '@app/core';
  
 
 @Component({
   selector: 'insurance-contract',
   templateUrl: './insurance-contract.component.html',
 })
 export class InsuranceContractComponent implements OnInit {
 
   @Output() createContractEvent = new EventEmitter();

   ngOnInit(): void {
     
   } 

   onClickCreateContract(): void {
    this.createContractEvent.emit();
   }
 
 
 }
 