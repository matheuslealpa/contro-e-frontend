import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular/ui/data-grid';
import {EventoService} from "../../../service/evento.service";
import {StandardNgListComponent} from "../../../@core/template/standard-ng-list-component";
import {EventoConfig} from "../evento-config";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {Curso} from "../../../domain/evento";

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
})
export class EventoListComponent extends StandardNgListComponent<Curso, number> implements OnInit {

  @ViewChild(DxDataGridComponent, {static: true})
  dataGrid: any;

  config: StandardNgConfig = EventoConfig;

  constructor(
    injector: Injector,
    protected eventoService: EventoService,
  ) {
    super(injector, eventoService);
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
