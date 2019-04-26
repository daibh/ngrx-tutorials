import { Action } from '@ngrx/store';

export enum CategoryActionTypes {
  LoadCategory = '[Category] Load Categories',
  LoadCategorySuccess = '[Category] Load Categories Success',
  LoadCategoryFailed = '[Category] Load Categories Failed',

}

export class LoadCategory implements Action {
  readonly type = CategoryActionTypes.LoadCategory;
}

export class LoadCategorySuccess implements Action {
  readonly type = CategoryActionTypes.LoadCategorySuccess;
  constructor(readonly payload: { categories: any[] }) { }
}

export class LoadCategoryFailed implements Action {
  readonly type = CategoryActionTypes.LoadCategoryFailed;
  constructor(readonly payload: { error: any }) { }
}


export type CategoryActions = LoadCategory | LoadCategoryFailed | LoadCategorySuccess;
