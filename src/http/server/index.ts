import 'reflect-metadata';
import { Elysia } from 'elysia';
import PersonsController from '../../controllers/persons.controller';
import {
  createPersonSchema,
  retrievePersonByIdSchema,
  searchPersonByTermSchema,
} from '../validations/person.schema.validation';
import PostgresDataSource from '../../database/typeorm/datasource';

const SERVER_PORT = process.env.HTTP_PORT as unknown as number;

await PostgresDataSource.initialize();

const personController = new PersonsController();

const app = new Elysia();

app
  .get(
    '/pessoas/:id',
    async (context) => {
      return personController.retrievePersonById(context);
    },
    retrievePersonByIdSchema,
  )
  .get(
    '/pessoas',
    async (context) => {
      return personController.searchPersonsByTerm(context);
    },
    searchPersonByTermSchema,
  )
  .post(
    '/pessoas',
    async (context) => {
      return personController.createPerson(context);
    },
    createPersonSchema,
  )
  .get('/contagem-pessoas', async () => {
    return personController.retrievePersonsCount();
  })
  .onRequest(({ request }) => {
    console.log(`request: ${request.method} ${request.url}`);
  });

app.listen(SERVER_PORT);
console.log(`server running on port ${app.server?.port}`);
