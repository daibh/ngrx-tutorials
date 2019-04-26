import { createSelector } from '@ngrx/store';
import { AdminState, selectAdmin } from '../../../admin.state';
import { VendorState } from '../reducers/vendor.reducer';

export const selectVendor = createSelector(
    selectAdmin,
    (state: AdminState) => state.vendorState
);

export const selectVendors = createSelector(
    selectVendor,
    (state: VendorState) => state.vendors
);