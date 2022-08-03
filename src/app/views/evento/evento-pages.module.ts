import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventoPagesRoutingModule} from './evento-pages-routing.module';
import {EventoPagesComponent} from './evento-pages.component';
import {EventoListComponent} from "./evento-list/evento-list.component";
import {DxDataGridModule} from "devextreme-angular";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    EventoPagesComponent,
    EventoListComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    EventoPagesRoutingModule
  ]
})
export class EventoPagesModule {
}
