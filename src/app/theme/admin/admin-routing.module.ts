import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../../core/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administrator',
      status: false
    },
    children: [
      {
        path: '',
        loadChildren: './single-page-on/single-page-on.module#SinglePageOnModule'
      }
    ],
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
