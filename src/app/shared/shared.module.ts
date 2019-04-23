import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {SpinnerComponent} from './spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleComponent } from '../layout/auth/title/title.component';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  exports: [
    NgbModule,    
    HttpClientModule,
    SpinnerComponent,
    TitleComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SpinnerComponent,
    TitleComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],
  providers: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
