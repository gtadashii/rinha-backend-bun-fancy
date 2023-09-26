import 'reflect-metadata';
import { Elysia } from "elysia";
import PersonsController from '../../controllers/persons.controller';
import { createPersonSchema, retrievePersonByIdSchema, searchPersonByTermSchema } from '../validations/person.schema.validation';

const personController = new PersonsController();

const app = new Elysia()
  .group("/pessoas", (app) => {
    return app
      .get("/:id", personController.retrievePersonById, retrievePersonByIdSchema)
      .get("/pessoas", personController.searchPersonsByTerm, searchPersonByTermSchema)
      .post("/pessoas", personController.createPerson, createPersonSchema)
  })
  .get("/contagem-pessoas", personController.retrievePersonsCount)
  .listen(3000);

console.log(`server running on port ${app.server?.port}`);
