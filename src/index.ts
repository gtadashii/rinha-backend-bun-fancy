import 'reflect-metadata';

import { Elysia, t } from "elysia";
import PersonsController from './controllers/persons.controller';

const personController = new PersonsController();

const app = new Elysia()
  .get("/pessoas/:id", () => {})
  .get("/pessoas", () => { return [] })
  .get("/contagem-pessoas", () => {})
  .post("/pessoas", personController.createPerson, {
    body: t.Object({
      nome: t.String(),
      apelido: t.String(),
      nascimento: t.Date(),
      stack: t.Array(t.String()),
    }),
  })
  .listen(3000);

console.log(`server running on port ${app.server?.port}`);
