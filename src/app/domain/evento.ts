import {Endereco} from "./endereco";
import {Colando} from "./colando";
import {Injectable} from "@angular/core";

export class Evento {
  id?: number;
  nomeLocal?: string;
  dataEvento?: string;
  enderecos?: Endereco[];
  colandos?: Colando[];
}

const eventos:Evento[] = [
  {
    id: 1,
    nomeLocal: "Hangar",

  }
];

@Injectable()
export class Service {
  getEvento() {
    return eventos;
  }
}

