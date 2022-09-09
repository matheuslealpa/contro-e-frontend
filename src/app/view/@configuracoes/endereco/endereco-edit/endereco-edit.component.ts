import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, Injector, OnInit, ViewChild} from '@angular/core';

import {StandardNgEditComponent} from "../../../../@core/template/standard-ng-edit-component";
import {StandardNgConfig} from "../../../../@core/template/standard-ng-config";

import {EnderecoConfig} from "../endereco-config";
import {EnderecoService} from "../../../../service/endereco.service";

class EnderecoEdit {
    id?: number;
    rua?: string;
    numero?: string;
    cep?: string;
    cidade?: string;
    estado?: string;
    pais?: string;
}

@Component({
  selector: 'app-endereco-edit',
  templateUrl: './endereco-edit.component.html',
  styles: [],
})
export class EnderecoEditComponent extends StandardNgEditComponent<EnderecoEdit, number> implements OnInit {

  @ViewChild(DxFormComponent, {static: true})
  form: any;

  config: StandardNgConfig = EnderecoConfig;


  constructor(
    injector: Injector,
    protected EnderecoService: EnderecoService,
  ) {
    super(injector, EnderecoService);
  }

  ngOnInit() {
    this.load(EnderecoEdit);
  }


}
