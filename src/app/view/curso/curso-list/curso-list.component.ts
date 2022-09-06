import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular/ui/data-grid';
import {CursoService} from "../../../service/curso.service";
import {StandardNgListComponent} from "../../../@core/template/standard-ng-list-component";
import {CursoConfig} from "../curso-config";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";

class CursoView {
  id?: number;
  nome?: string;
}

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
})
export class CursoListComponent extends StandardNgListComponent<CursoView, number> implements OnInit {

  @ViewChild(DxDataGridComponent, {static: true})
  dataGrid: any;

  config: StandardNgConfig = CursoConfig;

  constructor(
    injector: Injector,
    protected CursoService: CursoService,
  ) {
    super(injector, CursoService);
  }

  ngOnInit(): void {
    this.load()
  }

  /**
   * Recebe a informação da coluna e envia status como  Inconsistênte ou Efetivado ou Não Efetivado.
   * @param cellInfo
   */
  customizeText(cellInfo: any) {
    return cellInfo.value == true ? 'Sim' : 'Não';
  }


}
