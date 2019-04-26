import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  LoadProductList = '[Product] Load Products',
  LoadProductListSuccess = '[Product] Load Success Products',
  LoadProductListFailed = '[Product] Load Failed Products',
  LoadListProductResponse = '[Product] Load Respnose Products',
  LoadListProductPage = '[Product] Load Products Page',
  LoadListProductFilter = '[Product] Load Products Filter',
  LoadListProductSort = '[Product] Load Products Sort'
}

export class LoadProductList implements Action {
  readonly type = ProductActionTypes.LoadProductList;
}

export class LoadProductListSuccess implements Action {
  readonly type = ProductActionTypes.LoadProductListSuccess;
  constructor(readonly payload: { response: any }) { }
}

export class LoadProductListFailed implements Action {
  readonly type = ProductActionTypes.LoadProductListFailed;
  constructor(readonly payload: { error: any }) { }
}

export class LoadListProductResponse implements Action {
  readonly type = ProductActionTypes.LoadListProductResponse;
  constructor(readonly payload: { response: any }) { }
}

export class LoadListProductPage implements Action {
  readonly type = ProductActionTypes.LoadListProductPage;
  constructor(readonly payload: { page: number }) { }
}

export class LoadListProductFilter implements Action {
  readonly type = ProductActionTypes.LoadListProductFilter;
  constructor(readonly payload: { filter: any }) { }
}

export class LoadListProductSort implements Action {
  readonly type = ProductActionTypes.LoadListProductSort;
  constructor(readonly payload: { sort: string }) { }
}

export type ProductActions =
  LoadProductList |
  LoadProductListSuccess |
  LoadProductListFailed |
  LoadListProductResponse |
  LoadListProductPage |
  LoadListProductFilter |
  LoadListProductSort
  ;
