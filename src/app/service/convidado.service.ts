import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Convidado} from "../domain/convidado";
import {StandardNgService} from "../@core/template/standard-ng-service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConvidadoService extends StandardNgService{

  URL_API: string = `${environment.contextPath}/api/convidados`
  constructor(private httpClient:HttpClient) {
    super(httpClient)
  }
}
