import { createSelector } from '@ngrx/store';
import { AdminState, selectAdmin } from '../../../admin.state';
import { ProductState } from '../reducers/product.reducer';

export const selectProduct = createSelector(
    selectAdmin,
    (state: AdminState) => state.productState
);

export const selectProductList = createSelector(
    selectProduct,
    (state: ProductState) => state.products
);

export const selectListLoading = createSelector(
    selectProduct,
    (state: ProductState) => state.isListLoading
);

export const selectListRequestOption = createSelector(
    selectProduct,
    (state: ProductState) => state.reqOption
);