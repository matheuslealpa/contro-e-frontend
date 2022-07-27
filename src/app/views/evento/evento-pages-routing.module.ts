import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventoPagesComponent } from './evento-pages.component';
import { EventoListComponent } from "./evento-list/evento-list.component";

const routes: Routes = [
  { path: '', component: EventoPagesComponent, children: [
      {path: '', component: EventoListComponent}
    ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventoPagesRoutingModule { }
