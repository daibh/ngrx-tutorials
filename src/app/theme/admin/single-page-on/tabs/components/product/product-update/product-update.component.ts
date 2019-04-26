import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/theme/admin/admin.state';
import { selectCategories } from '../../../selectors/category.selector';
import { selectUpdateProduct } from '../../../selectors/product.selector';
import { selectVendors } from '../../../selectors/vendor.selector';
import { LoadSaveProduct } from '../../../actions/product.actions';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  currentObj: Product;
  vendor$: Observable<any>;
  category$: Observable<any>;

  @ViewChild('updateForm') filterForm: NgForm;
  constructor(
    private store$: Store<State>,
    public activeModal: NgbActiveModal
  ) {
    this.vendor$ = this.store$.pipe(select(selectVendors));
    this.category$ = this.store$.pipe(select(selectCategories));
  }

  ngOnInit() {
    this.store$.pipe(select(selectUpdateProduct)).subscribe(product => this.currentObj = Object.assign({}, product));
  }

  onSubmit = $event => {
    $event.preventDefault();
    console.log('onSubmit', this.currentObj);
    this.store$.dispatch(new LoadSaveProduct({ product: this.currentObj }));
  }

}

export interface Product {
  id?: any;
  name?: any;
  description?: any;
  detail?: any;
  image?: any;
  vendor_id?: any;
  category_id?: any;
  unit_price?: any;
  sale_price?: any;
  status?: any;
  created_at?: any;
  updated_at?: any;
}