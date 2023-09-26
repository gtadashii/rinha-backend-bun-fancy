import { t } from "elysia";

export const createPersonSchema = {
  body: t.Object({
    nome: t.String({
      maxLength: 100,
    }),
    apelido: t.String({
      maxLength: 32,
    }),
    nascimento: t.String({
      default: undefined,
      format: "date"
    }),
    stack: t.Array(t.String({
      maxLength: 32,
    }), {
      default: undefined,
    }),
  }),
}

export const retrievePersonByIdSchema = {
  params: t.Object({
    id: t.String({
      default: undefined,
      format: "uuid",
    }),
  }),
}

export const searchPersonByTermSchema = {
  query: t.Object({
    t: t.String(),
  }),
}

