import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Evento} from "../domain/evento";

@Injectable({
  providedIn: 'root'
})
export class CursoService implements OnInit{

  PATH:string = '/server-api/api/curso';

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  findAll(){
    this.httpClient.get<Evento>(this.PATH)
      .subscribe(value => value.nome);
  }

  findById(id: number){
    this.httpClient.get<Evento>(`${this.PATH}/${id}`);
  }

  save(resource: Evento){
    return resource.id ? this.update(resource.id, resource) : this.insert(resource);
  }

  update(id: number, resource: Evento) {
    return this.httpClient.put<Evento>(`${this.PATH}/${id}`, resource)
      .subscribe(values => console.log(values));
  }

  insert(resource: Evento){
    return this.httpClient.post<Evento>(`${this.PATH}`, resource).subscribe(values => values)
  }

  delete(id: number){
    return this.httpClient.delete(`${this.PATH}/${id}`)
      .subscribe(()=>console.log(`ID ${id} successfully deleted`))
  }
}
