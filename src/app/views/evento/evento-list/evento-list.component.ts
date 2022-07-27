import {Component, NgModule} from '@angular/core';
import {Evento, Service} from "../../../domain/evento";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {DevExtremeModule, DxDataGridModule} from "devextreme-angular";

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
})
export class EventoListComponent {
  eventos: Evento[] = [];

  constructor(service: Service) {
    this.eventos = service.getCurso();
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
