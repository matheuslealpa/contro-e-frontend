import {Convidado} from "./convidado";
import {Curso} from "./evento";

export class Colando {
  id?: number;
  matricula?: string;
  nome?: string;
  curso?:Curso;
  convidados?: Convidado[];
}
