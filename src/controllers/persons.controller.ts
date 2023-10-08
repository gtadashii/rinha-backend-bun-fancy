import { Context } from 'elysia';
import { PersonsRepository } from '../repository/persons.repository';
import { CreatePersonsonUseCase } from '../usecases/create-person.usecase';
import Person from '../domain/person';
import { PersonNotFoundException, UsernameAlreadyTakenException } from '../http/exceptions';
import { RetrievePersonByIdUseCase } from '../usecases/retrieve-person-by-id.usecase';
import { SearchPersonByTermUseCase } from '../usecases/search-person-by-term.usecase';
import { CountPersonsUseCase } from '../usecases/count-persons.usecase';

class PersonsController {
  private personsRepository: PersonsRepository;
  public constructor() {
    this.personsRepository = new PersonsRepository();
  }

  public async createPerson(context: Context) {
    console.log('[createPerson] called');
    const createPersonUseCase = new CreatePersonsonUseCase(this.personsRepository);
    const { nome, apelido, nascimento, stack } = context.body as Person;
    try {
      const personData = new Person({
        nome,
        apelido,
        nascimento,
        stack,
      });
      const createdPerson = (await createPersonUseCase.execute(personData)) as any;
      return new Response(null, { status: 201, headers: { Location: `/pessoas/${createdPerson.id}` } });
    } catch (error) {
      console.error('[createPerson] error', error);
      if (error instanceof UsernameAlreadyTakenException || error instanceof PersonNotFoundException) {
        return new Response(null, { status: 422 });
      }
      return new Response(null, { status: 422 });
    }
  }

  public async retrievePersonById(context: any) {
    console.log('[retrievePersonById] called');
    const { id } = context.params;
    const retrievePersonByIdUseCase = new RetrievePersonByIdUseCase(this.personsRepository);
    try {
      const person = await retrievePersonByIdUseCase.execute(id);
      return new Response(JSON.stringify(person), { status: 200 });
    } catch (error) {
      console.error('[retrievePersonById] error', error);
      if (error instanceof PersonNotFoundException) {
        return new Response(null, { status: 404 });
      }
      return new Response(null, { status: 422 });
    }
  }

  public async searchPersonsByTerm(context: Context) {
    console.log('[searchPersonsByTerm] called');
    const searchPersonByTermUseCase = new SearchPersonByTermUseCase(this.personsRepository);
    const { t: term } = context.query;
    try {
      const persons = await searchPersonByTermUseCase.execute(term as string);
      return new Response(JSON.stringify(persons), { status: 200 });
    } catch (error) {
      console.error('[searchPersonsByTerm] error', error);
      return new Response(null, { status: 422 });
    }
  }

  public async retrievePersonsCount() {
    console.log('[retrievePersonsCount] called');
    const countPersonsUseCase = new CountPersonsUseCase(this.personsRepository);
    try {
      const count = await countPersonsUseCase.execute();
      return new Response(JSON.stringify(count), { status: 200 });
    } catch (error) {
      console.error('[retrievePersonsCount] error', error);
      return new Response(null, { status: 422 });
    }
  }
}

export const personsController = new PersonsController();
