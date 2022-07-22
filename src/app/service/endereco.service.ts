import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Endereco} from "../domain/endereco";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService implements OnInit{

  PATH = '/server-api/api/endereco';

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
  }

  findAll() {
    this.httpClient.get<Endereco>(`${this.PATH}`)
      .subscribe(values => console.log(values));
  }

  save(resource: Endereco) {
    return resource.id ? this.update(resource.id, resource) : this.insert(resource);
  }

  insert(resource: Endereco) {
    this.httpClient.post<Endereco>(`${this.PATH}`, resource)
      .subscribe(values => console.log(values));
  }

  update(id: number, resource: Endereco) {
    return this.httpClient.put<Endereco>(`${this.PATH}/${id}`, resource)
      .subscribe(values => console.log(values));
  }

  delete(id: number){
    return this.httpClient.delete(`${this.PATH}/${id}`)
      .subscribe(()=>console.log(`ID ${id} successfully deleted`))
  }
}
