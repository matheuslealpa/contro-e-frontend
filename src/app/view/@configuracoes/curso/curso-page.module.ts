import {NgModule} from '@angular/core';
import {CursoListComponent} from './curso-list/curso-list.component';
import {CursoEditComponent} from "./curso-edit/curso-edit.component";
import {CursoDetailComponent} from './curso-detail/curso-detail.component';
import {CursoPageRoutingModule} from "./curso-page-routing.module";
import {CursoPageComponent} from "./curso-page.component";
import {SharedModule} from '../../../@shared/shared.module';
import {DevExtremeModule} from "devextreme-angular";

@NgModule({
  declarations: [
    CursoListComponent,
    CursoEditComponent,
    CursoDetailComponent,
    CursoPageComponent,
  ],
  imports: [
    CursoPageRoutingModule,
    SharedModule,
    DevExtremeModule,
  ],
})
export class CursoPageModule {
}
