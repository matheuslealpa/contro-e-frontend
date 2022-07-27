import {Injectable} from "@angular/core";

export class Curso{
  id?: number;
  nome?: string;
}

const cursos: Curso[] = [
  {
    id:1,
    nome: "Administração"
  },
  {
    id:2,
    nome: "Ciência da Computação"
  },
  {
    id:3,
    nome: "Direito"
  },
  {
    id:4,
    nome: "Medicina"
  },{
    id:5,
    nome: "Odontologia"
  },{
    id:6,
    nome: "Nutrição"
  },{
    id:7,
    nome: "Engenharia de Computação"
  },{
    id: 8,
    nome: "Engenharia Civil"
  }

]

@Injectable({
  providedIn: 'root'
})
export class Service {
  getCurso(): Curso[] {
    return cursos;
  }
}
