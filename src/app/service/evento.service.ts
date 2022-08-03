import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Evento} from "../domain/evento";
import {catchError, map, Observable, throwError} from "rxjs";
import {Page} from "../shared/page";

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  PATH = '/server-api/api/evento';

  constructor(private httpClient: HttpClient) {
  }


  public findAll(params: HttpParams): Observable<{data: Evento[]; totalCount: number | undefined }> {
    return this.httpClient.get<Page<Evento>>(this.PATH, {params})
      .pipe(
        map((page: Page<Evento>) => ({
          data: page.content,
          totalCount: page.totalElements
        })),
        catchError(error => {
          return throwError(new Error(error.message))
        })
      )
  }

  public save(resource: Evento) {
    return resource.id ? this.update(resource.id, resource) : this.insert(resource);
  }

  public insert(resource: Evento) {
    this.httpClient.post<Evento>(this.PATH, resource)
      .subscribe(values => console.log(values));
  }

  public update(id: number, resource: Evento) {
    return this.httpClient.put<Evento>(`${this.PATH}/${id}`, resource);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.PATH}/${id}`)
  }
}
