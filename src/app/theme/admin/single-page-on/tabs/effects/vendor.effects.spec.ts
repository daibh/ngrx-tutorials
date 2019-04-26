import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VendorEffects } from './vendor.effects';

describe('VendorEffects', () => {
  let actions$: Observable<any>;
  let effects: VendorEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VendorEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(VendorEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
