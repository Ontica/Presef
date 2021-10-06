/**
 * @license
 * Copyright (c) La Vía Óntica SC, Ontica LLC and contributors. All rights reserved.
 *
 * See LICENSE.txt in the project root for complete license information.
 */


export interface Claim {
  readonly type: string;
  readonly value: any;
}


export class ClaimsList {
  constructor(public claims: Claim[]) { }
}


export interface Identity {
  readonly username: string;
  readonly email: string;
  readonly fullname: string;
  readonly name: string;
}


export interface SessionToken {
  readonly accessToken: string;
  readonly expiresIn: number;
  readonly refreshToken: string;
  readonly tokenType: string;
}


export interface PrincipalData {
  readonly claims: Claim[];
  readonly identity: Identity;
  readonly roles: string[];
  permissions: string[];
}
