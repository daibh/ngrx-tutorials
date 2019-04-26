import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { VendorActionTypes, VendorActions } from '../actions/vendor.actions';


@Injectable()
export class VendorEffects {


  @Effect()
  loadVendors$ = this.actions$.pipe(
    ofType(VendorActionTypes.LoadVendors),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<VendorActions>) {}

}
