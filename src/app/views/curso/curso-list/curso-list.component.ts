import {Component, enableProdMode, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {DxSelectBoxModule, DxTemplateModule} from "devextreme-angular";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Curso, Service} from "../../../domain/curso";
import {DxListModule} from "devextreme-angular/ui/list";

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  providers:[Service],
  styleUrls: ['./curso-list.component.css'],
  preserveWhitespaces: true,
})
export class CursoListComponent {
  cursos: Curso[];

  constructor(service: Service) {
    this.cursos = service.getCurso();
  }
}


@NgModule({
  imports: [
    BrowserModule,
    DxSelectBoxModule,
    DxListModule,
    DxTemplateModule,
  ],
  declarations: [CursoListComponent],
  bootstrap: [CursoListComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
