import { Injectable } from '@angular/core';
export class Curso {
  id?: number;
  nome?: string;
}

const cursos: Curso[] = [{
  id: 1,
  nome: 'Arquitetura e Urbanismo',
  },
  {
    id: 2,
    nome: 'Administração',
  },
  {
    id: 3,
    nome: 'Ciência da Computação',
  },
  {
    id: 4,
    nome: 'Comunicação Social/Publicidade e Propaganda',
  },
  {
    id: 5,
    nome: 'Direito',
  },
  {
    id: 6,
    nome: 'Engenharia de Computação',
  },
  {
    id: 7,
    nome: 'Engenharia de Produção',
  },
  {
    id: 8,
    nome: 'Engenharia Civil',
  },
  {
    id: 9,
    nome: 'Enfermagem',
  },
  {
    id: 10,
    nome: 'Farmácia',
  },
  {
    id: 11,
    nome: 'Fisioterapia',
  },
  {
    id: 12,
    nome: 'Nutrição',
  },

];

@Injectable()
export class Service {
  getCurso() {
    return cursos;
  }
}
