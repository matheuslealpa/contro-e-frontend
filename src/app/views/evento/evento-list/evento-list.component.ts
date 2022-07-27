import {Component, NgModule} from '@angular/core';
import {Curso, Service} from "../../../domain/evento";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {DevExtremeModule, DxDataGridModule} from "devextreme-angular";

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
})
export class EventoListComponent {
  eventos: Curso[] = [];

  constructor(service: Service) {
    this.eventos = service.getEvento();
  }
}

@NgModule({
  declarations: [EventoListComponent],
  bootstrap: [EventoListComponent],
  imports: [
    DevExtremeModule,
    DxDataGridModule
  ]
})

export class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);
