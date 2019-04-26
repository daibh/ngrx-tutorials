import { Action } from '@ngrx/store';

export enum VendorActionTypes {
  LoadVendor = '[Vendor] Load Vendors',
  LoadVendorFailed = '[Vendor] Load Vendors Failed',
  LoadVendorSuccess = '[Vendor] Load Vendors Success',

}

export class LoadVendor implements Action {
  readonly type = VendorActionTypes.LoadVendor;
}

export class LoadVendorSuccess implements Action {
  readonly type = VendorActionTypes.LoadVendorSuccess;
  constructor(readonly payload: { vendors: any[] }) { }
}

export class LoadVendorFailed implements Action {
  readonly type = VendorActionTypes.LoadVendorFailed;
  constructor(readonly payload: { error: any }) { }
}


export type VendorActions = LoadVendor | LoadVendorSuccess | LoadVendorFailed;
