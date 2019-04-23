import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SinglePageOnRoutingModule } from './single-page-on-routing.module';
import { SinglePageOnComponent } from './single-page-on.component';
import { UserComponent } from './tabs/components/user/user.component';
import { UserNewComponent } from './tabs/components/user/user-new/user-new.component';
import { NotificationComponent } from './tabs/components/notification/notification.component';
import { OrganizationComponent } from './tabs/components/organization/organization.component';

@NgModule({
  imports: [
    CommonModule,
    SinglePageOnRoutingModule,
    SharedModule,
  ],
  declarations: [SinglePageOnComponent, UserComponent, UserNewComponent, NotificationComponent, OrganizationComponent],
  entryComponents: [UserNewComponent]
})
export class SinglePageOnModule { }
