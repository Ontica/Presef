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
import { ContractFields, ContractTypes, PartyFields, PaymentTypes } from '@app/models/contract';
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

  contractTypes: ContractTypes[] = [];
  paymentTypes = PaymentTypes;
    
  formHandler: FormHandler;
  controls =  InsuranceContractSetCreatorFormControls;

  contract: ContractFields;

  constructor(private contractDataService: ContractDataService) {
    this.initForm();
  }

  ngOnInit(): void { 
    this.getContractTypes();
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

  private getContractTypes(): void {

    this.contractDataService.getContractTypes()
      .subscribe(x => this.contractTypes = x);
  }

  private getFormData(): ContractFields {
    Assertion.assert(this.formHandler.form.valid,
      'Programming error: form must be validated before command execution.');

    const formModel = this.formHandler.form.getRawValue();

    const data: ContractFields = {
      contractTypeUID : formModel.contractType ?? '',
      paymentType : formModel.paymentType ?? '',      
      startDate: new Date().toString(),
      parties: this.getFormParties()
      }; 
    
    return data;
  }

  private getFormParties(): PartyFields[] {
  let parties: PartyFields[] = [];

  parties.push(this.getContractorFormData());  
  parties.push(this.getBeneficiaryFormData());

  return parties;
  }

  private getContractorFormData(): PartyFields {

    const formModel = this.formHandler.form.getRawValue();
  
    var party: PartyFields = {
      name : formModel.contractor ?? '',
      address : formModel.address ?? '',
      city :  formModel.city ?? '',
      state : formModel.state ?? '',
      zip : formModel.zip ?? '',     
      gender :formModel.gender ?? '',  
      RFC : formModel.RFC ?? '',
      CURP : formModel.CURP ?? '',
      INE : formModel.INE ?? '',
      phoneNumber : formModel.phone ?? '',
      cellPhoneNumber : formModel.cellPhone ?? '',
      email : formModel.email ?? '',
      TypeId: 1
    }
    
    return party;
  }

  private getBeneficiaryFormData(): PartyFields {

    const formModel = this.formHandler.form.getRawValue();

    var party: PartyFields =  {
      name: formModel.beneficiary ?? '',
      address : '',
      city :  '',
      state : '',
      zip : '',
      gender :'',
      RFC : '',
      CURP : '',
      INE : '',
      phoneNumber : '',
      cellPhoneNumber : '',
      email : '',
      TypeId: 2
    }
  
    return party;
  }

 }
 