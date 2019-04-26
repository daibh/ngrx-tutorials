import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isDefined } from 'src/app/shared/util/common.util';
import { State } from 'src/app/theme/admin/admin.state';
import { LoadListProductFilter, LoadListProductPage, LoadProductList, LoadUpdateProduct } from '../../actions/product.actions';
import { selectListLoading, selectListRequestOption, selectProductList } from '../../selectors/product.selector';
import { ProductUpdateComponent } from './product-update/product-update.component';

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': 'asc', '': 'asc' };
export const compare = (v1, v2) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  }
})
export class NgbdSortableHeader {

  @Input() sortable: string;
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();
  firstElementChild: HTMLSpanElement;

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ProductComponent implements OnInit {

  product$: Observable<any>;
  requestOption$: Observable<any>;
  isListLoading$: Observable<boolean>;

  @ViewChild('filterForm') filterForm: NgForm;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(
    private store$: Store<State>,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.product$ = this.store$.pipe(select(selectProductList));
    this.requestOption$ = this.store$.pipe(select(selectListRequestOption));
    this.isListLoading$ = this.store$.pipe(select(selectListLoading));
  }

  ngOnInit() {
    this.store$.dispatch(new LoadProductList());
  }

  onFilter = () => {
    const controls = Object.keys(this.filterForm.controls);
    const filter = {};
    if (isDefined(controls)) {
      controls.forEach(k => {
        filter[k] = this.filterForm.controls[k].value;
      })
    }
    console.log('onFilter', this.filterForm, filter);
    this.store$.dispatch(new LoadListProductFilter({ filter }));
  }

  onSort = ({ column, direction }: SortEvent) => {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    console.log('{ column, direction }', { column, direction });
    const sort = `${column},${direction}`;
    // this.store$.dispatch(new LoadListProductSort({ sort }));
  }

  isAsc = $columnName => this.headers.some(x => x.sortable === $columnName && x.direction === 'asc');
  isDesc = $columnName => this.headers.some(x => x.sortable === $columnName && x.direction === 'desc');

  onPageChange = $event => {
    this.store$.dispatch(new LoadListProductPage({ page: $event }));
  }

  onNewClick = $event => {
    $event.preventDefault();
    console.log('onNewClick');
    this.store$.dispatch(new LoadUpdateProduct({ product: {} }));
    const modalRef = this.modalService.open(ProductUpdateComponent, { size: "lg", container: '.tab-product' });
    modalRef.result.then(res => { }, err => { });
  }

}

