import {NgModule} from '@angular/core';
import {EventoListComponent} from './evento-list/evento-list.component';
import {EventoEditComponent} from "./evento-edit/evento-edit.component";
import {EventoDetailComponent} from './evento-detail/evento-detail.component';
import {EventoPageRoutingModule} from "./evento-page-routing.module";
import {EventoPageComponent} from "./evento-page.component";
import {SharedModule} from '../../@shared/shared.module';
import {DxLoadIndicatorModule} from "devextreme-angular";

@NgModule({
  declarations: [
    EventoListComponent,
    EventoEditComponent,
    EventoDetailComponent,
    EventoPageComponent,
  ],
  imports: [
    EventoPageRoutingModule,
    SharedModule,
    DxLoadIndicatorModule,
  ],
})
export class EventoPageModule {
}
