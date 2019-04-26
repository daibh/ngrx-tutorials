import { Action } from '@ngrx/store';

export enum ProductActionTypes {
  LoadProductList = '[Product] Load Products',
  LoadProductListSuccess = '[Product] Load Success Products',
  LoadProductListFailed = '[Product] Load Failed Products',
  LoadListProductResponse = '[Product] Load Respnose Products',
  LoadListProductPage = '[Product] Load Products Page',
  LoadListProductFilter = '[Product] Load Products Filter',
  LoadListProductSort = '[Product] Load Products Sort',
  LoadUpdateProduct = '[Product] Load Update Product',
  LoadSaveProduct = '[Product] Load Save Product',
  LoadSaveProductSuccess = '[Product] Load Save Product Sucess',
  LoadSaveProductFailed = '[Product] Load Save Product Failed',
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

export class LoadUpdateProduct implements Action {
  readonly type = ProductActionTypes.LoadUpdateProduct;
  constructor(readonly payload: { product: any }) { }
}

export class LoadSaveProduct implements Action {
  readonly type = ProductActionTypes.LoadSaveProduct;
  constructor(readonly payload: { product: any }) { }
}

export class LoadSaveProductSuccess implements Action {
  readonly type = ProductActionTypes.LoadSaveProductSuccess;
  constructor(readonly payload: { response: any }) { }
}

export class LoadSaveProductFailed implements Action {
  readonly type = ProductActionTypes.LoadSaveProductFailed;
  constructor(readonly payload: { error: any }) { }
}

export type ProductActions =
  LoadProductList |
  LoadProductListSuccess |
  LoadProductListFailed |
  LoadListProductResponse |
  LoadListProductPage |
  LoadListProductFilter |
  LoadListProductSort |
  LoadUpdateProduct |
  LoadSaveProduct |
  LoadSaveProductSuccess |
  LoadSaveProductFailed
  ;
