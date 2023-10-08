FROM oven/bun

COPY . .
RUN bun install
CMD bun src/http/server/index.ts
