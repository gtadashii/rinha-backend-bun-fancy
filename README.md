# rinha-backend-bun-fancy

Minha tentativa ~~(super atrasada por sinal :sweat_smile:)~~ na rinha de back-end

A minha ideia aqui é criar uma aplicação mais próxima do que é utilizado no dia a dia das empresas e validar como a mesma se comporta nos pesados testes de carga da rinha e ver se aguenta a pancada.

Como um plus estou utilizando o bun + Elysia para já pegar as manhas desse carinha que promete muito ainda.

Devo criar outro projeto mais simples para validar como o Bun se sai, normalmente as pessoas começariam pelo mais fácil, mas como sou meio maluco essa versão deve sair depois hehehe.

## Como executar?

1. Executar o comando: `docker-compose up --build -d`
2. O serviço estará disponível na rota 9999, ex: `curl --request GET --url http://localhost:9999/contagem-pessoas`

## Stack

- Bun
- Docker
- Elysia
- Nginx
- Postgres
- TypeORM
