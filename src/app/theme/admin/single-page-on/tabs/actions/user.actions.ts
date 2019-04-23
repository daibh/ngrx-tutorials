import { Action } from '@ngrx/store';

export enum UserActionTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFailed = '[User] Load Users Failed',
  ChangePageUsers = '[User] Change Page Users',
  StorePaginationUsers = '[User] Store Pagination Users',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LoadUsers;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LoadUsersSuccess;
  constructor(readonly payload: { response: any }) { }
}

export class LoadUsersFailed implements Action {
  readonly type = UserActionTypes.LoadUsersFailed;
  constructor(readonly payload: { error: any }) { }
}

export class ChangePageUsers implements Action {
  readonly type = UserActionTypes.ChangePageUsers;
  constructor(readonly payload: { page: number }) { }
}

export class StorePaginationUsers implements Action {
  readonly type = UserActionTypes.StorePaginationUsers;
  constructor(readonly payload: { response: any }) { }
}


export type UserActions = LoadUsers | LoadUsersSuccess | LoadUsersFailed | ChangePageUsers | StorePaginationUsers;
