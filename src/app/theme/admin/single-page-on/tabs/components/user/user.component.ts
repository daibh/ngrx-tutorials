import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserNewComponent } from './user-new/user-new.component';
import { Observable } from 'rxjs';
import { selectUserPagination, selectUserData, selectLoading } from '../../selectors/user.selector';
import { LoadUsers, ChangePageUsers } from '../../actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  page = 4;
  pagination$: Observable<{
    totalRecord: number;
    page: number;
    pageSize: number;
  }>;
  user$: Observable<any>;
  loading$: Observable<boolean>;

  constructor(
    private store: Store<any>,
    private modalService: NgbModal
  ) {
    this.user$ = this.store.pipe(select(selectUserData));
    this.pagination$ = this.store.pipe(select(selectUserPagination));
    this.loading$ = this.store.pipe(select(selectLoading));
  }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());
  }

  doAddNew = ($event) => {
    $event.preventDefault();
    const modalRef = this.modalService.open(UserNewComponent, { size: "lg" });
    modalRef.componentInstance.currentObj = new Object();
    modalRef.result.then(res => { }, err => { });
  }

  onPageChange = $event => {
    console.log($event);
    this.store.dispatch(new ChangePageUsers({ page: $event }));
  }

}
