import 'reflect-metadata';
import { Elysia } from "elysia";
import PersonsController from '../../controllers/persons.controller';
import { createPersonSchema, retrievePersonByIdSchema, searchPersonByTermSchema } from '../validations/person.schema.validation';
import PostgresDataSource from '../../database/typeorm/datasource';

const SERVER_PORT = process.env.HTTP_PORT;

PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  });

const personController = new PersonsController();

const app = new Elysia();
  app
    .get("/:id", personController.retrievePersonById, retrievePersonByIdSchema)
    .get("/pessoas", personController.searchPersonsByTerm, searchPersonByTermSchema)
    .post("/pessoas", personController.createPerson, createPersonSchema)
    .get("/contagem-pessoas", personController.retrievePersonsCount)
    .listen(SERVER_PORT as unknown as number);

console.log(`server running on port ${app.server?.port}`);
console.log('server routes: ', JSON.stringify(app.routes, null, 2));
