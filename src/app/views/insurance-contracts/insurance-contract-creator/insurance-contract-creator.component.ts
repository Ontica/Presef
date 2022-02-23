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
import { ContractFields, ContractTypes, PaymentTypes } from '@app/models/contract';
import { Alert } from 'selenium-webdriver';
import { ContractDataService } from '@app/data-services/contract.data.service';
  


enum InsuranceContractSetCreatorFormControls {
  contractor = 'contractor',
  address = 'address',
  city =  'city',
  state =  'state',
  zip = 'zip',
  dateOfBirth = 'dateOfBirth',
  gender = 'gender',  
  RFC = 'RFC',
  CURP = 'CURP',
  INE =  'INE',
  phone =  'phone',
  cellPhone =  'cellPhone',  
  email = 'email',
  contractType = 'contractType',
  paymentType = 'paymentType',
  contractDate = 'contractDate',
  beneficiary =  'beneficiary'
}


 @Component({
   selector: 'insurance-contract-creator',
   templateUrl: './insurance-contract-creator.component.html',
 })
 export class InsuranceContractCreatorComponent implements OnInit {

  submitted = false;

  @Output() eventCloseCreateContract = new EventEmitter();

  contractTypes = ContractTypes;
  paymentTypes = PaymentTypes;
    
  formHandler: FormHandler;
  controls =  InsuranceContractSetCreatorFormControls;

  contract: ContractFields;

  constructor(private contractDataService: ContractDataService) {
    this.initForm();
  }

  ngOnInit(): void { 
    
  } 

  onSave() {  
     this.contract = this.getFormData();  

      this.contractDataService.createContract(this.contract).
            subscribe(x => alert("Polizada Creada"));
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
        address : new FormControl(''), 
        city : new FormControl(''),
        state : new FormControl(''),
        zip : new FormControl(''),
        dateOfBirth : new FormControl(''),
        gender : new FormControl(''),
        RFC : new FormControl(''),
        CURP : new FormControl(''),
        INE : new FormControl(''),
        phone : new FormControl(''),
        cellPhone : new FormControl(''),     
        email: new FormControl(''),
        contractType : new FormControl(''),
        paymentType : new FormControl(''),
        contractDate : new FormControl(''),
        beneficiary : new FormControl('')
      })
    );
  }

  private getFormData(): ContractFields {
    Assertion.assert(this.formHandler.form.valid,
      'Programming error: form must be validated before command execution.');

    const formModel = this.formHandler.form.getRawValue();

    const data: ContractFields = {
      contractor :  {
        name : formModel.contractor ?? '',
        address : formModel.address ?? '',
        city :  formModel.city ?? '',
        state : formModel.state ?? '',
        zip : formModel.zip ?? '',     
        gender :formModel.gender ?? '',  
        RFC : formModel.RFC ?? '',
        CURP : formModel.CURP ?? '',
        INE : formModel.INE ?? '',
        phone : formModel.phone ?? '',
        cellPhone : formModel.cellPhone ?? '',
        email : formModel.email ?? '',
      },
      contractType : formModel.contractType ?? '',
      paymentType : formModel.paymentType ?? '',      
      contractStartDate: new Date().toString(),
      beneficiary : {
        name: formModel.beneficiary ?? '',
        address : '',
        city :  '',
        state : '',
        zip : '',
        gender :'',
        RFC : '',
        CURP : '',
        INE : '',
        phone : '',
        cellPhone : '',
        email : '',
      }    

      };  
    
    return data;
  }

 }
 