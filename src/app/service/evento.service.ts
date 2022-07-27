import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "../domain/evento";


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
    this.httpClient.get<Curso>(`${this.PATH}`)
      .subscribe(values => console.log(values));
  }

  save(resource: Curso) {
    return resource.id ? this.update(resource.id, resource) : this.insert(resource);
  }

  insert(resource: Curso) {
    this.httpClient.post<Curso>(`${this.PATH}`, resource)
      .subscribe(values => console.log(values));
  }

  update(id: number, resource: Curso) {
    return this.httpClient.put<Curso>(`${this.PATH}/${id}`, resource)
      .subscribe(values => console.log(values));
  }

  delete(id: number){
    return this.httpClient.delete(`${this.PATH}/${id}`)
      .subscribe(()=>console.log(`ID ${id} successfully deleted`))
  }
}
