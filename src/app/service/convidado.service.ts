import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Convidado} from "../domain/convidado";

@Injectable({
  providedIn: 'root'
})
export class ConvidadoService implements OnInit{

  PATH = '/server-api/api/convidado';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  findAll(){
    this.httpClient.get<Convidado>(`${this.PATH}`)
      .subscribe(values => values);
  }

  insert(resource: Convidado) {
    this.httpClient.post<Convidado>(`${this.PATH}`, resource)
      .subscribe(values => console.log(values));
  }

  update(id: number, resource: Convidado) {
    return this.httpClient.put<Convidado>(`${this.PATH}/${id}`, resource)
      .subscribe(values => console.log(values));
  }

  save(resource: Convidado) {
    return resource.id ? this.update(resource.id, resource) : this.insert(resource);
  }

  delete(id: number){
    return this.httpClient.delete(`${this.PATH}/${id}`)
      .subscribe(()=>console.log(`ID ${id} successfully deleted`))
  }
}
