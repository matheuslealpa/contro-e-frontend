import {NgModule} from '@angular/core';
import {ConvidadoListComponent} from './convidado-list/convidado-list.component';
import {ConvidadoEditComponent} from "./convidado-edit/convidado-edit.component";
import {ConvidadoDetailComponent} from './convidado-detail/convidado-detail.component';
import {ConvidadoPageRoutingModule} from "./convidado-page-routing.module";
import {ConvidadoPageComponent} from "./convidado-page.component";
import {SharedModule} from '../../@shared/shared.module';
import {DevExtremeModule} from "devextreme-angular";

@NgModule({
  declarations: [
    ConvidadoListComponent,
    ConvidadoEditComponent,
    ConvidadoDetailComponent,
    ConvidadoPageComponent,
  ],
  imports: [
    ConvidadoPageRoutingModule,
    SharedModule,
    DevExtremeModule,
  ],
})
export class ConvidadoPageModule {
}
