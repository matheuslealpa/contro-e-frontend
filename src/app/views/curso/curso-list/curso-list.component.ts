import {Component, NgModule} from '@angular/core';
import {Curso, Service} from "../../../domain/curso";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {DevExtremeModule, DxDataGridModule} from "devextreme-angular";

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
})
export class CursoListComponent {
  cursos: Curso[] = [];

  constructor(service: Service) {
    this.cursos = service.getCurso();
  }
}

@NgModule({
  declarations: [CursoListComponent],
  bootstrap: [CursoListComponent],
  imports: [
    DevExtremeModule,
    DxDataGridModule
  ]
})

export class AppModule{}


platformBrowserDynamic().bootstrapModule(AppModule);
