import { IPersonsRepository } from "../repository/persons.repository";

export class RetrievePersonByIdUseCase {
  private repository: IPersonsRepository;
  public constructor(repository: IPersonsRepository) {
      this.repository = repository;
  }
  async execute(id: string) {
      const person = await this.repository.retrievePersonById(id);
      if (!person)
          throw new Error('Person not found');
      return person;
  }
}