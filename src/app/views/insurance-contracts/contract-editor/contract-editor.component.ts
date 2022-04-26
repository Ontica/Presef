import { Component, Input, Output, OnInit, OnChanges, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Assertion } from '@app/core';
import { FormHandler } from '@app/shared/utils';

import { ContractFields, ContractTypes, PartyFields, PaymentTypes, Contract, Party } from '@app/models/contract';
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
  beneficiary =  'beneficiary',
  agent = 'agent',
  agency = 'agency'
}


@Component({
  selector: 'app-contract-editor',
  templateUrl: './contract-editor.component.html',
  styleUrls: ['./contract-editor.component.scss']
})
export class ContractEditorComponent implements OnInit, OnChanges {

  formHandler: FormHandler;
  controls =  InsuranceContractSetCreatorFormControls;

  submitted = false;
  isEditMode = true;

  contractTypes: ContractTypes[] = [];
  paymentTypes = PaymentTypes;

  @Input() contract?: Contract;
  @Output() contractUpdatedEvent = new EventEmitter<ContractFields>();
  @Output() contractDeletedEvent = new EventEmitter<string>();

  constructor(private contractDataService: ContractDataService) { 
    this.initForm();
  }

  ngOnInit(): void {
    this.getContractTypes();
    this.formHandler.disableForm();
    
  }

  ngOnChanges(): void {
    this.setFormModel();
    console.log(this.contract);
  }

  onCancel() {
    this.formHandler.disableForm();
    this.setFormModel();
    this.isEditMode = true;
  }

  onDelete() {    
    this.contractDeletedEvent.emit(this.contract.contractTrackUID);
  }

  onEdit() {
    this.formHandler.disableForm(false);
    this.isEditMode = false;
    this.disableControls();
  }


  onSave() {  
   let contract= this.getFormData();

   this.isEditMode = true;
   this.formHandler.disableForm(); 

   this.contractUpdatedEvent.emit(contract);   
  }
  

  onUpdate() {
    this.formHandler.disableForm(false);
  }

  private disableControls(): void {
    this.formHandler.disableControl('agent');
    this.formHandler.disableControl('agency');
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
      contractUID : this.contract.contractTrackUID,
      contractTypeUID: formModel.contractType ?? '',
      paymentType : formModel.paymentType ?? '',      
      startDate:  '12/04/2022', //new Date().toString(),     
      parties: this.getFormParties(),
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
      uid: this.contract.parties[0].uid,
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
      typeId: 1,
      
    }
    
    return party;
  }

  private getBeneficiaryFormData(): PartyFields {

    const formModel = this.formHandler.form.getRawValue();

    var party: PartyFields =  {
      uid: this.contract.parties[1].uid,
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
      typeId : 2
      
    }
  
    return party;
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
        beneficiary : new FormControl(''),
        agent: new FormControl(''),
        agency: new FormControl('')
      })
    );
  }
    

  private setFormModel() {
    this.formHandler.form.reset({
      contractor : this.contract.parties[0].name,
      address : this.contract.parties[0].address, 
      city : this.contract.parties[0].city,
      state : this.contract.parties[0].state,
      zip : this.contract.parties[0].zip,
      dateOfBirth : this.contract.parties[0].dateOfBirth,
      gender : this.contract.parties[0].gender,
      RFC : this.contract.parties[0].rfc,
      CURP : this.contract.parties[0].curp,
      INE : this.contract.parties[0].ine,
      phone : this.contract.parties[0].phoneNumber,
      cellPhone : this.contract.parties[0].cellPhoneNumber,     
      email: this.contract.parties[0].email,
      contractType : this.contract.contractTypeInfo.uid,
      contractDate : this.contract.startDate,
      beneficiary : this.contract.parties[1].name,
      paymentType: this.contract.contractPaymentType,
      agency: this.contract.agency.name,
      agent: this.contract.agent.name
       /* emissionDate:this.contract.emissionDate,*/          
    });
  }




}
