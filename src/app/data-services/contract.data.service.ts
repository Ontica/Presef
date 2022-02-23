/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Assertion, HttpService } from '@app/core';

import { ContractFields,Contract } from '@app/models/contract';

@Injectable()
export class ContractDataService {

  constructor(private http: HttpService) { }

  createContract(contractFields: ContractFields): Observable<Contract> {
    Assertion.assertValue(contractFields, 'contractFields');

    const path = `v1/insurtech/contracts`;

    return this.http.post<Contract>(path,contractFields);
  }

  
}

