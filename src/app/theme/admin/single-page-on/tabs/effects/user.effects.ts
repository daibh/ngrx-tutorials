import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap, tap, map, switchMap, withLatestFrom, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY, of, pipe } from 'rxjs';
import { UserActionTypes, UserActions, LoadUsers, LoadUsersSuccess, LoadUsersFailed, StorePaginationUsers } from '../actions/user.actions';
import { UserService } from '../services/user.service';
import { Store } from '@ngrx/store';
import { UserState } from '../reducers/user.reducer';
import { AdminState, State } from '../../../admin.state';
import { selectUser, selectUserPagination } from '../selectors/user.selector';
import { AppState } from 'src/app/core/core.state';


@Injectable()
export class UserEffects {

  @Effect()
  loadUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.LoadUsers),
    tap(() => console.log('LoadUserEffect')),
    withLatestFrom(this.store$.select(s => s.admin.userState)),
    switchMap(([action, state]) => this.service.fetch({ page: `${state.pagination.page}` }).pipe(
      mergeMap((res) => [
        new StorePaginationUsers({ response: res }),
        new LoadUsersSuccess({ response: res })
      ]),
      catchError(error => of(new LoadUsersFailed(error)))
    ))
  );

  @Effect()
  changePageUsers$ = this.actions$.pipe(
    ofType(UserActionTypes.ChangePageUsers),
    tap((action) => {
      console.log('Change page to: ', action.payload.page);
    }),
    map(() => new LoadUsers())
  );


  constructor(
    private actions$: Actions<UserActions>,
    private store$: Store<State>,
    private service: UserService
  ) { }

}
