import {Endereco} from "./endereco";
import {Colando} from "./colando";


export class Curso {
  id?: number;
  nomeLocal?: string;
  dataEvento?: string;
  endereco?: Endereco[];
  colandos?: Colando[];
}
