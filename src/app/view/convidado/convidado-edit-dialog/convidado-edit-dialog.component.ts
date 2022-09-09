import {DxFormComponent} from 'devextreme-angular/ui/form';
import {Title} from '@angular/platform-browser';
import {Component, EventEmitter, Injector, OnInit, Output, ViewChild} from '@angular/core';
import {StandardNgConfig} from "../../../@core/template/standard-ng-config";
import {ConvidadoConfig} from "../convidado-config";
import {ConvidadoService} from "../../../service/convidado.service";
import {map, take} from "rxjs/operators";
import {Convidado} from "../../../domain/convidado";
import {of, Subscription} from "rxjs";
import notify from "devextreme/ui/notify";

@Component({
  selector: 'app-convidado-edit-dialog',
  templateUrl: './convidado-edit-dialog.component.html',
  styles: [],
})
export class ConvidadoEditDialogComponent implements OnInit {

  @ViewChild(DxFormComponent)
  private form: DxFormComponent | any;

  @Output()
  onAfterSave = new EventEmitter<Convidado>();

  saveSub: Subscription | any;

  controlVariable: boolean = false;

  visible = false;

  convidado: any;

  closeButtonOptions: any;

  config: StandardNgConfig = ConvidadoConfig;

  constructor(private convidadoService: ConvidadoService,
              public title: Title
  ) {}

  ngOnInit() {}

  public create() {
    this.title.setTitle('Novo convidado');
    this.convidado = {};
    this.showDialog();
  }

  save(event: any) {
    event.preventDefault();
    this.saveSub = this.convidadoService.saveTeste(this.convidado)
      .pipe(take(1))
      .subscribe((resource: Convidado) => {
        notify(
          `Convidado ${this.convidado.id ? 'atualizado' : 'criado'} com sucesso`,
          'success',
          3000
        );
        this.closeDialog();
        this.onAfterSave.emit(resource);
      });
  }

  private showDialog() {
    this.visible = true;
  }

  private closeDialog() {
    this.visible = false;
  }

  notExistsConvidadoByNomeValidation = (params: any) => {
    if (params.value !== this.convidado[params.formItem.dataField] || this.controlVariable === true) {
      this.controlVariable = true;
      return this.serverRequest(params.value);
    } else return new Promise((resolve) => resolve(true));
  };

  serverRequest(value: any): any {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(
            this.convidadoService.findByNome(value)
              .pipe(
                map((convidado: Convidado) => !convidado.nome))
              .toPromise()
              .catch(err => of(true)));
        }, 400);
      }
    )
  }

  public edit(id: number) {
    this.convidado = {}
    this.controlVariable = false;
    this.title.setTitle('Editar convidado');
    this.convidadoService
      .findById(id)
      .pipe(take(1))
      .subscribe(convidado => (this.convidado = convidado));
    this.showDialog();
  }

}
