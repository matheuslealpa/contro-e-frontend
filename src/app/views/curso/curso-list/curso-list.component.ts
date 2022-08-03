import {Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {DevExtremeModule, DxDataGridModule} from "devextreme-angular";

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
})
export class CursoListComponent {
  cursos = [
    {
      id:1,
      nome: "Administração"
    },
    {
      id:2,
      nome: "Ciência da Computação"
    },
    {
      id:3,
      nome: "Direito"
    },
    {
      id:4,
      nome: "Medicina"
    },{
      id:5,
      nome: "Odontologia"
    },{
      id:6,
      nome: "Nutrição"
    },{
      id:7,
      nome: "Engenharia de Computação"
    },{
      id: 8,
      nome: "Engenharia Civil"
    }

  ];

  constructor() {
  }
}
