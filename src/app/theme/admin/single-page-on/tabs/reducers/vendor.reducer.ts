
import { VendorActions, VendorActionTypes } from '../actions/vendor.actions';

export interface VendorState {
  vendors?: any;
  vendorOptions?: any;
  error?: any;
}

export const initialState: VendorState = {

};

export function vendorReducer(state = initialState, action: VendorActions): VendorState {
  switch (action.type) {

    case VendorActionTypes.LoadVendor:
      return { ...state, error: null };

    case VendorActionTypes.LoadVendorSuccess:
      return { ...state, vendors: action.payload.vendors };

    case VendorActionTypes.LoadVendorFailed:
      return { ...state, error: action.payload.error };

    default:
      return state;
  }
}
