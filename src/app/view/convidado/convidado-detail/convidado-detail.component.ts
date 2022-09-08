import {Component, Injector, OnInit} from '@angular/core';
import {StandardNgDetailComponent} from "../../../@core/template/standard-ng-detail-component";
import {ConvidadoService} from "../../../service/convidado.service";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {ConvidadoConfig} from "../convidado-config";

class ConvidadoDetail {
  id?: number;
  nome?: string;
}

@Component({
  selector: 'app-convidado-detail',
  templateUrl: './convidado-detail.component.html',
})
export class ConvidadoDetailComponent extends StandardNgDetailComponent<ConvidadoDetail, number> implements OnInit {

  config: StandardNgConfig = ConvidadoConfig;

  constructor(
    injector: Injector,
    ConvidadoService: ConvidadoService) {
    super(injector, ConvidadoService);
  }

  ngOnInit(): void {
    this.load();
  }

}
