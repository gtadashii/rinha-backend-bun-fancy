import 'reflect-metadata';
import { Elysia } from 'elysia';
import { personsController } from '../../controllers/persons.controller';

import {
  createPersonSchema,
  retrievePersonByIdSchema,
  searchPersonByTermSchema,
} from '../validations/person.schema.validation';
import PostgresDataSource from '../../database/typeorm/datasource';

const SERVER_PORT = process.env.HTTP_PORT as unknown as number;

await PostgresDataSource.initialize();
await PostgresDataSource.runMigrations();

const app = new Elysia();

app
  .get('/', () => 'Hello World!')
  .get('/pessoas/:id', (params) => personsController.retrievePersonById(params), retrievePersonByIdSchema)
  .get('/pessoas', (params) => personsController.searchPersonsByTerm(params), searchPersonByTermSchema)
  .post('/pessoas', (params) => personsController.createPerson(params), createPersonSchema)
  .get('/contagem-pessoas', () => personsController.retrievePersonsCount());

app.listen(3000);
console.log(`server running on port ${app.server?.port}`);
