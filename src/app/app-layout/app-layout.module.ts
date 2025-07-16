import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppLayoutRoutingModule } from './app-layout-routing.module';
import { DivisionsComponent } from './divisions/divisions.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppLayoutRoutingModule,
    DivisionsComponent
  ]
})
export class AppLayoutModule { }
