import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ConvidadoListComponent} from './convidado-list/convidado-list.component';
import {ConvidadoEditDialogComponent} from "./convidado-edit-dialog/convidado-edit-dialog.component";
import {ConvidadoDetailComponent} from './convidado-detail/convidado-detail.component';
import {ConvidadoPageComponent} from "./convidado-page.component";

const routes: Routes = [
  {
    path: '', component: ConvidadoPageComponent, children: [
      {path: '', component: ConvidadoListComponent},
      {
        path: 'edit', children: [
          {path: '', component: ConvidadoEditDialogComponent,},
          {path: ':id', component: ConvidadoEditDialogComponent,},
        ],
      },
      {path: ':id', component: ConvidadoDetailComponent,},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ConvidadoPageRoutingModule {
}
