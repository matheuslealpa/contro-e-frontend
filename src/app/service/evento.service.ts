import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Evento} from "../domain/evento";


@Injectable({
  providedIn: 'root'
})
export class EventoService implements OnInit{

  PATH = '/server-api/api/evento';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {

  }

  findAll() {
    this.httpClient.get<Evento>(`${this.PATH}`)
      .subscribe(values => console.log(values));
  }

  save(resource: Evento) {
    return resource.id ? this.update(resource.id, resource) : this.insert(resource);
  }

  insert(resource: Evento) {
    this.httpClient.post<Evento>(`${this.PATH}`, resource)
      .subscribe(values => console.log(values));
  }

  update(id: number, resource: Evento) {
    return this.httpClient.put<Evento>(`${this.PATH}/${id}`, resource)
      .subscribe(values => console.log(values));
  }

  delete(id: number){
    return this.httpClient.delete(`${this.PATH}/${id}`)
      .subscribe(()=>console.log(`ID ${id} successfully deleted`))
  }
}
