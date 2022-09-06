import {Component, NgModule} from '@angular/core';
import DataSource from "devextreme/data/data_source";



@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
})
export class CursoListComponent {

  dataSource: DataSource = new DataSource({

  });

  constructor() {
  }
}
