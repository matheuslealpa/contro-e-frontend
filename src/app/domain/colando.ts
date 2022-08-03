import {Convidado} from "./convidado";
import {Evento} from "./evento";

export class Colando {
  id?: number;
  matricula?: string;
  nome?: string;
  curso?:Evento;
  convidados?: Convidado[];
}
