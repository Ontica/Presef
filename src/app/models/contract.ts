export interface InsuranceRequest {
    contractor: Contractor,    
    contractType: string;
    paymentType: string,   
    beneficiary: string
  }

export interface Contractor {
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
  phone: string,
  cellPhone: string,  
}

export interface Item {
  uid: string
  name: string
}

export const ContractTypes: Item[] =[ {uid: '1', name: 'Escencial'}, 
                                      {uid: '3', name: 'Óptimo'},
                                      {uid: '4', name: 'Plus'}];

export const PaymentTypes: Item[] = [ {uid: '1', name: 'Pago vía nómina'}, 
                                      {uid: '2',name: 'Deposito bancario'},
                                      {uid: '3', name: 'Pago en OXXO'}, 
                                      {uid: '4',name: 'Otro medio'}];




  