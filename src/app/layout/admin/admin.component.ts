import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../core/core.state';
import { ActionAddOrActiveTab } from '../../core/auth/auth.actions';
import { MenuItems, MainMenuItems } from '../../shared/menu-items/menu-items';
import { Observable } from 'rxjs';
import { selectMenu } from '../../core/auth/auth.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public verticalNavType: string;
  public isCollapsedSideBar: string;
  public sidebarFixedHeight: string;

  asideMenu$: Observable<MainMenuItems[]>;
  
  constructor(
    public menuItems: MenuItems,
    public store: Store<AppState>
  ) {
    this.asideMenu$ = this.store.pipe(select(selectMenu));

    this.isCollapsedSideBar = 'no-block';
    this.sidebarFixedHeight = 'calc(100vh - 55px)'; // calc(100vh - 190px)
  }

  ngOnInit() {

  }

  toggleOpenedSidebar() {
    this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
    if (this.verticalNavType !== 'collapsed') {
      this.sidebarFixedHeight = this.isCollapsedSideBar === 'yes-block' ? 'calc(100vh - 50px)' : 'calc(100vh - 50px)';
    }
  }

  hoverOutsideSidebar() {
    if (this.verticalNavType === 'collapsed') {
      const mainEle = document.querySelectorAll('.pcoded-trigger');
      for (let i = 0; i < mainEle.length; i++) {
        mainEle[i].classList.remove('pcoded-trigger');
      }
    }
  }

  fireClick(e) {
    if (this.verticalNavType === 'collapsed') {
      const parentEle = e.target.parentNode.parentNode;
      if (parentEle.classList.contains('pcoded-trigger')) {
        const subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < subEle.length; i++) {
          if (subEle[i].classList.contains('pcoded-trigger')) {
            subEle[i].classList.remove('pcoded-trigger');
          }
        }
      } else {
        e.target.click();
      }
    }
  }

  fireClickLeave(e) {
    if (this.verticalNavType === 'collapsed') {
      const parentEle = <HTMLElement>e.target.parentNode.parentNode;
      const subEle = parentEle.querySelectorAll('.pcoded-hasmenu');
      for (let i = 0; i < subEle.length; i++) {
        if (subEle[i].classList.contains('pcoded-trigger')) {
          subEle[i].classList.remove('pcoded-trigger');
        }
      }
    }
  }

  onOpenTab(asideChildren) {
    this.store.dispatch(new ActionAddOrActiveTab(Object.assign({}, asideChildren)));
  }

}
