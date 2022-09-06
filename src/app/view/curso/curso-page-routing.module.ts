import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CursoPageComponent} from './curso-page.component';
import {CursoListComponent} from "./curso-list/curso-list.component";

const routes: Routes = [
  { path: '', component: CursoPageComponent, children: [
    {path: '', component: CursoListComponent}
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoPageRoutingModule {
}
