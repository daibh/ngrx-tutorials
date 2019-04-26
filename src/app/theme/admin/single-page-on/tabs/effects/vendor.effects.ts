import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, switchMap } from 'rxjs/operators';
import { LoadVendorFailed, LoadVendorSuccess, VendorActions, VendorActionTypes } from '../actions/vendor.actions';
import { VendorService } from '../services/vendor.service';



@Injectable()
export class VendorEffects {


  @Effect()
  loadVendors$ = this.actions$.pipe(
    ofType(VendorActionTypes.LoadVendor),
    switchMap(() => this.service$.fetch().pipe(
      concatMap((response) => [
        new LoadVendorSuccess({ vendors: response })
      ]),
      catchError(error => of(new LoadVendorFailed({ error })))
    ))
  );


  constructor(
    private actions$: Actions<VendorActions>,
    private service$: VendorService
  ) { }

}
