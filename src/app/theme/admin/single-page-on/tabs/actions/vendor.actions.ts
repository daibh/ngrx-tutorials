import { Action } from '@ngrx/store';

export enum VendorActionTypes {
  LoadVendors = '[Vendor] Load Vendors',
  
  
}

export class LoadVendors implements Action {
  readonly type = VendorActionTypes.LoadVendors;
}


export type VendorActions = LoadVendors;
