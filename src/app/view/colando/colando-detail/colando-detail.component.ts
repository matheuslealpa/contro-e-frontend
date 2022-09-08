import {Component, Injector, OnInit} from '@angular/core';
import {StandardNgDetailComponent} from "../../../@core/template/standard-ng-detail-component";
import {ColandoService} from "../../../service/colando.service";
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {ColandoConfig} from "../colando-config";

class ColandoDetail {
  id?: number;
  matricula?: number;
  nome?: string;
}

@Component({
  selector: 'app-colando-detail',
  templateUrl: './colando-detail.component.html',
})
export class ColandoDetailComponent extends StandardNgDetailComponent<ColandoDetail, number> implements OnInit {

  config: StandardNgConfig = ColandoConfig;

  constructor(
    injector: Injector,
    colandoService: ColandoService) {
    super(injector, colandoService);
  }

  ngOnInit(): void {
    this.load();
  }

}
