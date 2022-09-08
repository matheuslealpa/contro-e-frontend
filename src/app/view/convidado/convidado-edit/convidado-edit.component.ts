import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Component, Injector, OnInit, ViewChild} from '@angular/core';
import {StandardNgEditComponent} from "../../../@core/template/standard-ng-edit-component";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {ConvidadoConfig} from "../convidado-config";
import {ConvidadoService} from "../../../service/convidado.service";

class ConvidadoEdit {
    id?: number;
    nome?: string;
}

@Component({
  selector: 'app-convidado-edit',
  templateUrl: './convidado-edit.component.html',
  styles: [],
})
export class ConvidadoEditComponent extends StandardNgEditComponent<ConvidadoEdit, number> implements OnInit {

  @ViewChild(DxFormComponent, {static: true})
  form: any;

  config: StandardNgConfig = ConvidadoConfig;


  constructor(
    injector: Injector,
    protected ConvidadoService: ConvidadoService,
  ) {
    super(injector, ConvidadoService);
  }

  ngOnInit() {
    this.load(ConvidadoEdit);
  }


}
