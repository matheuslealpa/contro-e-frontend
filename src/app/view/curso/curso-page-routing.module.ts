import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CursoListComponent} from './curso-list/curso-list.component';
import {CursoEditComponent} from "./curso-edit/curso-edit.component";
import {CursoDetailComponent} from './curso-detail/curso-detail.component';
import {CursoPageComponent} from "./curso-page.component";

const routes: Routes = [
  {
    path: '', component: CursoPageComponent, children: [
      {path: '', component: CursoListComponent},
      {
        path: 'edit', children: [
          {path: '', component: CursoEditComponent,},
          {path: ':id', component: CursoEditComponent,},
        ],
      },
      {path: ':id', component: CursoDetailComponent,},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CursoPageRoutingModule {
}
