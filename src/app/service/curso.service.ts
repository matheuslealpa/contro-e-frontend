import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Curso} from "../domain/curso";

@Injectable({
  providedIn: 'root'
})
export class CursoService{

  PATH:string = '/server-api/api/curso';

  constructor(private httpClient:HttpClient) { }

  findAll(){
    this.httpClient.get<Curso>(this.PATH)
      .subscribe(value => value.nome);
  }

  findById(id: number){
    this.httpClient.get<Curso>(`${this.PATH}/${id}`);
  }

  save(resource: Curso){
    return resource.id ? this.update(resource.id, resource) : this.insert(resource);
  }

  update(id: number, resource: Curso) {
    return this.httpClient.put<Curso>(`${this.PATH}/${id}`, resource)
      .subscribe(values => console.log(values));
  }

  insert(resource: Curso){
    return this.httpClient.post<Curso>(`${this.PATH}`, resource).subscribe(values => values)
  }

  delete(id: number){
    return this.httpClient.delete(`${this.PATH}/${id}`)
      .subscribe(()=>console.log(`ID ${id} successfully deleted`))
  }
}

