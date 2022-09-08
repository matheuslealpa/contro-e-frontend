import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {StandardNgEditComponent} from "../../../@core/template/standard-ng-edit-component";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {LoadOptions} from "devextreme/data/load_options";
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {EventoConfig} from "../evento-config";
import {EventoService} from "../../../service/evento.service";
import {EnderecoService} from "../../../service/endereco.service";
import {ColandoService} from "../../../service/colando.service";

class EventoEdit {
    id?: number;
    nomeLocal?: string;
    dataEvento?: Date;
    endereco?: {id:number};
    colandoIds?: number[] | undefined;
}

@Component({
  selector: 'app-evento-edit',
  templateUrl: './evento-edit.component.html',
  styles: [],
})
export class EventoEditComponent extends StandardNgEditComponent<EventoEdit, number> implements OnInit {

  @ViewChild(DxFormComponent, {static: true})
  form: any

  config: StandardNgConfig = EventoConfig;

   enderecoDxSelectBoxEditorOptions = {
       valueExpr: 'id',
       displayExpr: 'rua',
       searchEnabled: true,
       searchExpr: 'rua',
       dataSource: new DataSource({
           store: new CustomStore({
               key: 'id',
               byKey: (key: number) => this.enderecoService.findById(key).toPromise(),
               load: (options: LoadOptions) => this.enderecoService.findAll(options).toPromise()
           }),
           sort: [{selector: 'rua', desc: false}],
       })
   };
  /**
  * Variável de id's referente a material.
  */
 colandoSelectedItemKeys: number[] = [];
  /**
  * DataSource que faz a busca de todos ou um objeto(Material) usando laodOptions.
  */
 colandoDataSource: DataSource = new DataSource({
      store: new CustomStore({
          key: 'id',
          byKey: (key: number) => this.colandoService.findById(key).toPromise(),
          load: options => this.colandoService.findAll(options).toPromise()
      })
  });

  constructor(
    injector: Injector,
    protected eventoService: EventoService,
    private enderecoService: EnderecoService,
    private colandoService: ColandoService,
  ) {
    super(injector, eventoService);
    this.load(EventoEdit);
  }

  ngOnInit() {
    //this.load(EventoEdit);
  }

  /**
  * Método de atualização de valores no dropDown
  */
  onSelectionChangedColando() {
    const formData: any = this.formData;
    if (formData == undefined){}
    // else this.formData. = this.colandoSelectedItemKeys;
  }

}
