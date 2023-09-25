import { Context } from "elysia";
import { PersonsRepository } from "../repository/persons.repository";
import { CreatePersonsonUseCase } from "../usecases/create-person.usecase";
import Person from "../domain/person";
import { PersonAlreadyExistsException } from "../http/exceptions";

export default class PersonsController {
  private personsRepository: PersonsRepository;
  public constructor() {
    this.personsRepository = new PersonsRepository();
  }

  public async createPerson(context: Context) {
    try {
      const createPersonUseCase = new CreatePersonsonUseCase(this.personsRepository);
      const { nome, apelido, nascimento, stack } = context.body as Person;
      const personData = new Person({
        nome,
        apelido,
        nascimento,
        stack,
      });
      const createdPerson = await createPersonUseCase.execute(personData) as Person;
      return new Response(null, { status: 201, headers: { "Location": `/pessoas/${createdPerson.id}` } });
    } catch (error) {
      if (error instanceof PersonAlreadyExistsException) {
        return new Response(null, { status: 422 });
      }
      return new Response(null, { status: 422 });
    }
  }
};
