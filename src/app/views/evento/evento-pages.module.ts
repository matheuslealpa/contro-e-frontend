import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventoPagesRoutingModule } from './evento-pages-routing.module';
import { EventoPagesComponent } from './evento-pages.component';


@NgModule({
  declarations: [
    EventoPagesComponent,

  ],
  imports: [
    CommonModule,
    EventoPagesRoutingModule
  ]
})
export class EventoPagesModule { }
