/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */

import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FormHandler, sendEvent } from '@app/shared/utils';
import { Assertion } from '@app/core';
import { validateBasis } from '@angular/flex-layout';
import { Contract } from '@app/models/contract';
  
export interface Item {
  uid: string
  name: string
}

enum InsuranceContractSetCreatorFormControls {
  contractor = 'contractor',
  email = 'email',
  contractType = 'contractType',
  paymentType = 'paymentType',
  contractDate = 'contractDate'
}
 @Component({
   selector: 'insurance-contract-creator',
   templateUrl: './insurance-contract-creator.component.html',
 })
 export class InsuranceContractCreatorComponent implements OnInit {

  submitted = false;

  @Output() eventCloseCreateContract = new EventEmitter();

  contractTypes: Item[] =[ {uid: '1', name: 'Escencial'}, {uid: '2',name: 'Escencial +'},
                   {uid: '3', name: 'Óptimo'}, {uid: '4',name: 'Plus'}, {uid: '5', name:'Plus +'}];
  paymentTypes: Item[] = [ {uid: '1', name: 'Pago vía nómina'}, {uid: '2',name: 'Deposito bancario'},
                           {uid: '3', name: 'Pago en OXXO'}, {uid: '4',name: 'Otro medio'}];
  
  
  formHandler: FormHandler;
  controls =  InsuranceContractSetCreatorFormControls;

  contract: Contract;

  constructor() {
    this.initForm();
  }

  ngOnInit(): void { 
    
  } 

  onSave() {    
    this.contract = this.getFormData();
    console.warn(this.contract);
    this.eventCloseCreateContract.emit();
  }
   
  onClose() {   
     this.eventCloseCreateContract.emit();
  }
  
  private initForm() {
    if (this.formHandler) {
      return;
    }

    this.formHandler = new FormHandler(
      new FormGroup({
        contractor : new FormControl(''),
        email: new FormControl(''),
        contractType: new FormControl(''),
        paymentType: new FormControl(''),
        contractDate: new FormControl('')
      })
    );
  }

  private getFormData(): any {
    Assertion.assert(this.formHandler.form.valid,
      'Programming error: form must be validated before command execution.');

    const formModel = this.formHandler.form.getRawValue();

    const data: any = {
      contractor: formModel.contractor?? '',
      email: formModel.email ?? '',
      contractType: formModel.contractType ?? '',
      paymentType: formModel.paymentType ?? '',
      contractDate: formModel.contractDate ?? ''
    };

    return data;
  }

 }
 