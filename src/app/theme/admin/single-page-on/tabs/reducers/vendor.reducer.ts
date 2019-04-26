
import { VendorActions, VendorActionTypes } from '../actions/vendor.actions';

export interface VendorState {
  vendors?: any;
  vendorOptions?: any;
}

export const initialState: VendorState = {

};

export function vendorReducer(state = initialState, action: VendorActions): VendorState {
  switch (action.type) {

    case VendorActionTypes.LoadVendors:
      return state;

    default:
      return state;
  }
}
