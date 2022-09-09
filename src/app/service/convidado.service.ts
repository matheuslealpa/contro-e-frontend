import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Convidado} from "../domain/convidado";
import {StandardNgService} from "../@core/template/standard-ng-service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConvidadoService extends StandardNgService{

  URL_API: string = `${environment.contextPath}/api/convidados`
  constructor(private httpClient:HttpClient) {
    super(httpClient)
  }

  public findByNome(nome: String): Observable<Convidado> {
    const params = new HttpParams()
      .set('nome', `${nome}`)
    return this.http.get<Convidado>(`${this.URL_API}/find-by-nome`, {params: params});
  }

  public saveTeste(resource: Convidado): Observable<Convidado> {
    return resource.id
      ? this.update(resource.id, resource)
      : this.insert(resource);
  }


}
