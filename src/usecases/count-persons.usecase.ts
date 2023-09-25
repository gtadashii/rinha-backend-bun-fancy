import { IPersonsRepository } from "../repository/persons.repository";

export class CountPersonsUseCase {
  private repository: IPersonsRepository;
  constructor(repository: IPersonsRepository) {
    this.repository = repository;
  }
  async execute() {
    return this.repository.countPersons();
  }
}