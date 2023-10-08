import Person from '../domain/person';
import { PersonsAlreadyExistsException } from '../http/exceptions';
import { IPersonsRepository } from '../repository/persons.repository';

export class CreatePersonsonUseCase {
  private repository: IPersonsRepository;
  public constructor(repositoy: IPersonsRepository) {
    this.repository = repositoy;
  }

  public async execute(person: Person): Promise<Person | void> {
    const personAlreadyExists = await this.repository.serchPersonByTerm(person.apelido);
    if (personAlreadyExists.length) throw new PersonsAlreadyExistsException();
    return this.repository.savePerson(person);
  }
}
