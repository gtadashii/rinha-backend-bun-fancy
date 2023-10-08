import { Entity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

interface PersonData {
  id?: string;
  nome: string;
  apelido: string;
  nascimento: string;
  stack: string[];
}
export default class Person {
  id: string;
  nome: string;
  apelido: string;
  nascimento: string;
  stack: string[];
  terms?: string;
  constructor(personData: PersonData) {
    this.id = uuidv4();
    this.nome = personData.nome;
    this.apelido = personData.apelido;
    this.nascimento = personData.nascimento;
    this.stack = personData.stack;
    this.terms = `${this.nome},${this.apelido},${this.stack.join()}`;
  }
}
