import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {DxDataGridComponent} from 'devextreme-angular/ui/data-grid';
import {EnderecoService} from "../../../service/endereco.service";
import {StandardNgListComponent} from "../../../@core/template/standard-ng-list-component";
import {EnderecoConfig} from "../endereco-config";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";

class EnderecoView {
  id?: number;
  rua?: string;
  numero?: string;
  cep?: string;
  cidade?: string;
  estado?: string;
  pais?: string;
}

@Component({
  selector: 'app-endereco-list',
  templateUrl: './endereco-list.component.html',
})
export class EnderecoListComponent extends StandardNgListComponent<EnderecoView, number> implements OnInit {

  @ViewChild(DxDataGridComponent, {static: true})
  dataGrid: any;

  config: StandardNgConfig = EnderecoConfig;

  constructor(
    injector: Injector,
    protected enderecoService: EnderecoService,
  ) {
    super(injector, enderecoService);
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
