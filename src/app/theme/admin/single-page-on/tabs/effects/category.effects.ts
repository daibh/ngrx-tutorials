import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, switchMap } from 'rxjs/operators';
import { CategoryActions, CategoryActionTypes, LoadCategoryFailed, LoadCategorySuccess } from '../actions/category.actions';
import { CategoryService } from '../services/category.service';



@Injectable()
export class CategoryEffects {


  @Effect()
  loadCategorys$ = this.actions$.pipe(
    ofType(CategoryActionTypes.LoadCategory),
    switchMap(() => this.service$.fetch().pipe(
      concatMap((response) => [
        new LoadCategorySuccess({ categories: response })
      ]),
      catchError(error => of(new LoadCategoryFailed({ error })))
    ))
  );


  constructor(
    private actions$: Actions<CategoryActions>,
    private service$: CategoryService
  ) { }

}
