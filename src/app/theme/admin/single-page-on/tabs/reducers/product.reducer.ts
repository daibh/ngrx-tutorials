
import { ProductActions, ProductActionTypes } from '../actions/product.actions';
import { isDefined } from 'src/app/shared/util/common.util';

export interface ProductState {
  products?: any;
  product?: any;
  reqOption: RequestOptions;
  error?: any;
  isListLoading: any;
}

export const initialState: ProductState = {
  reqOption: {
    query: {},
    page: 1
  },
  isListLoading: false
};

export function productReducer(state = initialState, action: ProductActions): ProductState {
  const oldRequestOptions = state.reqOption;
  let newRequestOption = {};
  switch (action.type) {

    case ProductActionTypes.LoadProductList:
      return {
        ...state,
        isListLoading: true,
        error: null
      };
    case ProductActionTypes.LoadProductListSuccess:
      const data = action.payload.response.data;
      return {
        ...state,
        products: data,
        isListLoading: false,
      };
    case ProductActionTypes.LoadProductListFailed:
      return {
        ...state,
        error: action.payload.error
      };
    case ProductActionTypes.LoadListProductResponse:
      const res = action.payload.response;
      newRequestOption = {
        ...oldRequestOptions,
        page: res.current_page,
        pageSize: res.per_page,
        total: res.total
      };
      return {
        ...state,
        reqOption: newRequestOption
      };
    case ProductActionTypes.LoadListProductPage:
      newRequestOption = {
        ...oldRequestOptions,
        page: action.payload.page
      };
      return {
        ...state,
        reqOption: newRequestOption
      };
    case ProductActionTypes.LoadListProductFilter:
      newRequestOption = {
        ...oldRequestOptions,
        query: { ...action.payload.filter },
        page: 1
      };
      return {
        ...state,
        reqOption: newRequestOption
      };
    case ProductActionTypes.LoadListProductSort:
      newRequestOption = {
        ...oldRequestOptions,
        sort: action.payload.sort
      };
      return {
        ...state,
        reqOption: newRequestOption
      };
    default:
      return state;
  }
}

export interface RequestOptions {
  query?: {
    name?: string;
    vendor_id?: number;
    category_id?: number;
    status?: number;
  }
  sort?: string;
  page?: number;
  pageSize?: number;
  total?: number;
}