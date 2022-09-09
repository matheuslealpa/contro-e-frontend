import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, Injector, OnInit, ViewChild} from '@angular/core';

import {StandardNgEditComponent} from "../../../../@core/template/standard-ng-edit-component";
import {StandardNgConfig} from "../../../../@core/template/standard-ng-config";

import {LoadOptions} from "devextreme/data/load_options";
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import {CursoConfig} from "../curso-config";
import {CursoService} from "../../../../service/curso.service";
import {ColandoService} from "../../../../service/colando.service";

class CursoEdit {
    id?: number;
    nome?: string;
    colandoIds?: number[];
}

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styles: [],
})
export class CursoEditComponent extends StandardNgEditComponent<CursoEdit, number> implements OnInit {

  @ViewChild(DxFormComponent, {static: true})
  form: any;

  config: StandardNgConfig = CursoConfig;

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
    protected CursoService: CursoService,
    private colandoService: ColandoService,
  ) {
    super(injector, CursoService);
  }

  ngOnInit() {
    this.load(CursoEdit);
  }

  /**
  * Método de atualização de valores no dropDown
  */
  onSelectionChangedColando() {
    this.formData.colandoIds = this.colandoSelectedItemKeys;
  }

}
