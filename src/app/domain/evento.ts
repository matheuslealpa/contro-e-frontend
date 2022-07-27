import {Endereco} from "./endereco";
import {Colando} from "./colando";
import {Injectable} from "@angular/core";

export class Curso {
  id?: number;
  nomeLocal?: string;
  dataEvento?: string;
  endereco?: Endereco[];
  colandos?: Colando[];
}

const eventos: Curso[] = [
  {
    id: 1,
    nomeLocal: "Hangar",
    dataEvento: "26-07-2022T15:05:00",
    endereco: [{
      id: 1,
      rua: "Av almirante barroso",
      cidade: "Belém",
      estado: "PA",
      cep: "66075054",
      pais: "Brasil"
    }],
    colandos: [{
      id: 1,
      nome: "Fulano da silva",
      convidados: [{
        id: 1,
        nome: "fulano"
      }]
    }, {
      id: 2,
      nome: "Fulano da silva",
      convidados: [{
        id: 2,
        nome: "fulano"
      }]
    },{
      id: 3,
      nome: "Fulano da silva",
      convidados: [{
        id: 3,
        nome: "fulano"
      }]
    }]
  },
  {
    id: 2,
    nomeLocal: "aaHangar",
    dataEvento: "26-07-2022T15:05:00",
    endereco: [{
      id: 2,
      rua: "Av almirante barroso",
      cidade: "Belém",
      estado: "PA",
      cep: "66075054",
      pais: "Brasil"
    }],
    colandos: [{
      id: 2,
      nome: "Fulano da silva",
      convidados: [{
        id: 2,
        nome: "fulano"
      }]
    }, {
      id: 2,
      nome: "Fulano da silva",
      convidados: [{
        id: 2,
        nome: "fulano"
      }]
    },{
      id: 3,
      nome: "Fulano da silva",
      convidados: [{
        id: 3,
        nome: "fulano"
      }]
    }]
  },
  {
    id: 1,
    nomeLocal: "Hangar",
    dataEvento: "26-07-2022T15:05:00",
    endereco: [{
      id: 1,
      rua: "Av almirante barroso",
      cidade: "Belém",
      estado: "PA",
      cep: "66075054",
      pais: "Brasil"
    }],
    colandos: [{
      id: 1,
      nome: "Fulano da silva",
      convidados: [{
        id: 1,
        nome: "fulano"
      }]
    }, {
      id: 2,
      nome: "Fulano da silva",
      convidados: [{
        id: 2,
        nome: "fulano"
      }]
    },{
      id: 3,
      nome: "Fulano da silva",
      convidados: [{
        id: 3,
        nome: "fulano"
      }]
    }]
  }]

@Injectable({
  providedIn: 'root'
})
export class Service {
  getEvento(): Curso[] {
    return eventos;
  }
}
