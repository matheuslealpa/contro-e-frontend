import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Colando} from "../domain/colando";

@Injectable({
  providedIn: 'root'
})
export class ColandoService implements OnInit {

  PATH = '/server-api/api/colando';

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {

  }

  findAll() {
    this.httpClient.get<Colando>(`${this.PATH}`)
      .subscribe(values => console.log(values));
  }

  save(resource: Colando) {
    return resource.id ? this.update(resource.id, resource) : this.insert(resource);
  }

  insert(resource: Colando) {
    this.httpClient.post<Colando>(`${this.PATH}`, resource)
      .subscribe(values => console.log(values));
  }

  update(id: number, resource: Colando) {
    return this.httpClient.put<Colando>(`${this.PATH}/${id}`, resource)
      .subscribe(values => console.log(values));
  }

  delete(id: number){
    return this.httpClient.delete(`${this.PATH}/${id}`)
      .subscribe(()=>console.log(`ID ${id} successfully deleted`))
  }

}
