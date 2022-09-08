import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {StandardNgEditComponent} from "../../../@core/template/standard-ng-edit-component";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {LoadOptions} from "devextreme/data/load_options";
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {ColandoConfig} from "../colando-config";
import {ColandoService} from "../../../service/colando.service";
import {CursoService} from "../../../service/curso.service";
import {ConvidadoService} from "../../../service/convidado.service";

class ColandoEdit {
    id?: number;
    matricula?: number;
    nome?: string;
    curso?: {id:number};
    convidadoIds?: number[];
}

@Component({
  selector: 'app-colando-edit',
  templateUrl: './colando-edit.component.html',
  styles: [],
})
export class ColandoEditComponent extends StandardNgEditComponent<ColandoEdit, number> implements OnInit {

  @ViewChild(DxFormComponent, {static: true})
  form: any;

  config: StandardNgConfig = ColandoConfig;

   cursoDxSelectBoxEditorOptions = {
       valueExpr: 'id',
       displayExpr: 'nome',
       searchEnabled: true,
       searchExpr: 'nome',
       dataSource: new DataSource({
           store: new CustomStore({
               key: 'id',
               byKey: (key: number) => this.cursoService.findById(key).toPromise(),
               load: (options: LoadOptions) => this.cursoService.findAll(options).toPromise()
           }),
           sort: [{selector: 'nome', desc: false}],
       })
   };
  /**
  * Variável de id's referente a material.
  */
 convidadoSelectedItemKeys: number[] = [];
  /**
  * DataSource que faz a busca de todos ou um objeto(Material) usando laodOptions.
  */
 convidadoDataSource: DataSource = new DataSource({
      store: new CustomStore({
          key: 'id',
          byKey: (key: number) => this.convidadoService.findById(key).toPromise(),
          load: options => this.convidadoService.findAll(options).toPromise()
      })
  });

  constructor(
    injector: Injector,
    protected colandoService: ColandoService,
    private cursoService: CursoService,
    private convidadoService: ConvidadoService,
  ) {
    super(injector, colandoService);
    this.load(ColandoEdit);
  }

  ngOnInit() {
    //this.load(ColandoEdit);
  }

  /**
  * Método de atualização de valores no dropDown
  */
  onSelectionChangedConvidado() {
    this.formData.convidadoIds = this.convidadoSelectedItemKeys;
  }

}
