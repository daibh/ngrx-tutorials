import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, mergeMap, switchMap, withLatestFrom, tap, map } from 'rxjs/operators';
import { State } from '../../../admin.state';
import { LoadListProductResponse, LoadProductListFailed, LoadProductListSuccess, ProductActions, ProductActionTypes, LoadProductList, LoadSaveProductSuccess, LoadSaveProductFailed } from '../actions/product.actions';
import { ProductService } from '../services/product.service';
import { LoadVendor } from '../actions/vendor.actions';
import { LoadCategory } from '../actions/category.actions';



@Injectable()
export class ProductEffects {


  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadProductList),
    withLatestFrom(this.store$.select(state => state.admin.productState)),
    switchMap(([action, state]) => this.service$.fetch(state.reqOption).pipe(
      mergeMap((response) => [
        new LoadListProductResponse({ response }),
        new LoadProductListSuccess({ response })
      ]),
      catchError(error => of(new LoadProductListFailed({ error })))
    ))
  );

  @Effect()
  changePage$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadListProductPage),
    map((action) => new LoadProductList())
  );

  @Effect()
  filterProduct$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadListProductFilter),
    map((action) => new LoadProductList())
  );

  @Effect()
  changeSort$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadListProductSort),
    map((action) => new LoadProductList())
  );

  @Effect()
  loadUpdateSource$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadUpdateProduct),
    mergeMap(() => [
      new LoadVendor(),
      new LoadCategory()
    ])
  );

  @Effect()
  loadSaveProduct$ = this.actions$.pipe(
    ofType(ProductActionTypes.LoadSaveProduct),
    switchMap((action) => this.service$.save(action.payload.product).pipe(
      mergeMap((res) => [
        new LoadSaveProductSuccess(res),
        new LoadProductList()
      ]),
      catchError(error => of(new LoadSaveProductFailed({ error })))
    ))
  );


  constructor(
    private actions$: Actions<ProductActions>,
    private store$: Store<State>,
    private service$: ProductService
  ) { }

}
