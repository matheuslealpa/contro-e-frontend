import {Component,} from "@angular/core";
import {HttpParams} from "@angular/common/http";
import CustomStore from "devextreme/data/custom_store";
import {EventoService} from "../../../service/evento.service";

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
})

export class EventoListComponent {
  dataSource: any = {};

  constructor(private eventoService: EventoService) {
    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }
    this.dataSource = new CustomStore({
      key: 'id',
      load(loadOptions: any) {
        let params: HttpParams = new HttpParams();
        ['sort', 'filter', 'size'].forEach((i) => {
          if (i in loadOptions && isNotEmpty(loadOptions[i])) {
            params = params.set(i, JSON.stringify(loadOptions[i]));
          }
        });
        return eventoService.findAll(params).toPromise()
          .then((data: any) => ({
            data: data.data,
            totalCount: data.totalCount
          }))
      }
    })
  }
}

