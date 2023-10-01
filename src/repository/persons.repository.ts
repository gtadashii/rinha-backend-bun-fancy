import { Repository } from 'typeorm';
import Person from '../domain/person';
import PostgresDataSource from '../database/typeorm/datasource';
import { v4 as uuidv4 } from 'uuid';

export interface IPersonsRepository {
  countPersons(): Promise<number>;
  savePerson(person: Person): Promise<Person>;
  retrievePersonById(id: string): Promise<Person | null>;
  serchPersonByTerm(term: string): Promise<Person[] | []>;
}

export class PersonsRepository implements IPersonsRepository {
  private repository: Repository<Person>;

  public constructor() {
    this.repository = PostgresDataSource.getRepository(Person);
  }

  public async countPersons(): Promise<number> {
    return this.repository.query(`SELECT COUNT(*) FROM person`);
  }

  public async savePerson(person: Person): Promise<Person> {
    if (!person.id) person.id = uuidv4();
    return this.repository.save(person);
  }

  public async retrievePersonById(id: string): Promise<Person | null> {
    return this.repository.findOne({ where: { id } });
  }

  public async serchPersonByTerm(term: string): Promise<Person[] | []> {
    return this.repository.query(`SELECT * FROM person WHERE serchableTerms LIKE '%${term}%' LIMIT 50`);
  }
}
