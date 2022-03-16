import { DateString, Identifiable } from "@app/core";



export interface ContractFields {    
    contractTypeUID: string;
    paymentType: string,   
    startDate: string,
    parties: PartyFields[] 
  }

export interface PartyFields {
  name: string,
  address: string,
  city: string,
  state: string,
  zip: string,
  dateOfBirth?:Date,
  gender:string,
  email: string,
  RFC: string,
  CURP:string,
  INE: string,
  phoneNumber: string,
  cellPhoneNumber: string,
  TypeId: number 
}

export interface Item {
  uid: string
  name: string
}

export interface ContractTypes extends Identifiable {}


export const PaymentTypes: Item[] = [ {uid: '1', name: 'Pago vía nómina'}, 
                                      {uid: '2',name: 'Deposito bancario'},
                                      {uid: '3', name: 'Pago en OXXO'}, 
                                      {uid: '4',name: 'Otro medio'}];

export interface Contract { 
  contractTrackUID: string,
  contractType: string,
  contractNo: string,
  contractStatus: string,
  startDate: DateString,
  endDate: DateString,
  parties: Party[]
}

export const EmptyContract: Contract = {
  contractTrackUID: '',
  contractType: '',
  contractNo: '',
  contractStatus: '',
  startDate: '01-01-1900',
  endDate: '01-01-1900',
  parties: []
}

export interface Party {
  address: string,
  cellPhoneNumber: string,
  curp: string,
  dateOfBirth: DateString,
  email: string,
  gender: number,
  ine: string,
  name: string,
  phoneNumber: string,
  rfc: string,
  typeId: number,
  uid: string,
  zip: string
}
