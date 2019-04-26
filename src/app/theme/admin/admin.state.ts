import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { AppState } from '../../core/core.state';
import { categoryReducer, CategoryState } from './single-page-on/tabs/reducers/category.reducer';
import { ProductState, productReducer } from './single-page-on/tabs/reducers/product.reducer';
import { userReducer, UserState } from './single-page-on/tabs/reducers/user.reducer';
import { vendorReducer, VendorState } from './single-page-on/tabs/reducers/vendor.reducer';


export const FEATURE_NAME = 'admin';
export const selectAdmin = createFeatureSelector<State, AdminState>(
  FEATURE_NAME
);
export const reducers: ActionReducerMap<AdminState> = {
  userState: userReducer,
  vendorState: vendorReducer,
  categoryState: categoryReducer,
  productState: productReducer
};

export interface AdminState {
  userState: UserState;
  vendorState: VendorState;
  categoryState: CategoryState;
  productState: ProductState;
}

export interface State extends AppState {
  admin: AdminState;
}
