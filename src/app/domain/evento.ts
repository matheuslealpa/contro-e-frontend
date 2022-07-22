import {Endereco} from "./endereco";
import {Colando} from "./colando";

export class Evento {
  id?: number;
  nomeLocal?: string;
  dataEvento?: string;
  enderecos?: Endereco[];
  colandos?: Colando[];
}
