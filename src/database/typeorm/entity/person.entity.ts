import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('persons')
export class Person {
  @PrimaryColumn()
  id: string;

  @Column({
    length: 100,
  })
  nome: string;

  @Column({
    length: 32,
    unique: true,
  })
  apelido: string;

  @Column({
    type: 'date', // should be YYYY-MM-DD format
  })
  nascimento: string;

  @Column({
    type: 'json',
  })
  stack: string[];

  @Column()
  terms: string;

  @Column({
    type: 'date',
  })
  createdAt: string;
}
