import { Repository } from 'typeorm';
import Person from '../domain/person';
import { Person as PersonEntity } from '../database/typeorm/entity/person.entity';
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
    this.repository = PostgresDataSource.getRepository(PersonEntity);
  }

  public async countPersons(): Promise<number> {
    console.info('[PersonsRepository][countPersons] called');
    return this.repository.query(`SELECT COUNT(*) FROM persons`);
  }

  public async savePerson(person: Person): Promise<Person> {
    console.info('[PersonsRepository][savePerson] called');
    if (!person.id) person.id = uuidv4();
    return this.repository.save(person);
  }

  public async retrievePersonById(id: string): Promise<Person | null> {
    console.info('[PersonsRepository][retrievePersonById] called');
    return this.repository.findOne({ where: { id } });
  }

  public async serchPersonByTerm(term: string): Promise<Person[] | []> {
    console.info('[PersonsRepository][serchPersonByTerm] called');
    const query = `SELECT * FROM persons WHERE terms LIKE '%${term}%' LIMIT 50;`;
    return this.repository.query(query);
  }
}
