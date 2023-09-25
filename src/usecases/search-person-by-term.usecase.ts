import { IPersonsRepository } from "../repository/persons.repository";

export class SearchPersonByTermUseCase {
    private repository: IPersonsRepository;
    public constructor(repository: IPersonsRepository) {
        this.repository = repository;
    }
    async execute(term: string) {
        const persons = await this.repository.serchPersonByTerm(term);
        return persons;
    }
}