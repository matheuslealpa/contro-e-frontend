import {Component, enableProdMode, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {DxSelectBoxModule, DxTemplateModule} from "devextreme-angular";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Evento, Service} from "../../../domain/evento";
import {DxListModule} from "devextreme-angular/ui/list";

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  providers:[Service],
  preserveWhitespaces: true,
  styleUrls: ['./evento-list.component.css'],
})
export class EventoListComponent {
  eventos: Evento[];

  constructor(service: Service) {
    this.eventos = service.getEvento();
  }
}


@NgModule({
  imports: [
    BrowserModule,
    DxSelectBoxModule,
    DxListModule,
    DxTemplateModule,
  ],
  declarations: [EventoListComponent],
  bootstrap: [EventoListComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
