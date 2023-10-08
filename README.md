# rinha-backend-bun-fancy

Minha tentativa ~~(super atrasada por sinal :sweat_smile:)~~ na rinha de back-end

A minha ideia aqui é criar uma aplicação mais próxima do que é utilizado no dia a dia das empresas e validar como a mesma se comporta nos pesados testes de carga da rinha e ver se aguenta a pancada.

Como um plus estou utilizando o bun + Elysia para já pegar as manhas desse carinha que promete muito ainda.

Devo criar outro projeto mais simples para validar como o Bun se sai, normalmente as pessoas começariam pelo mais fácil, mas como sou meio maluco essa versão deve sair depois hehehe.

## Stack

- Bun
- Docker
- Elysia
- Nginx
- Postgres
- TypeORM

## Como executar?

1. Executar o comando: `docker-compose up --build -d`
2. O serviço estará disponível na rota 9999, ex: `curl --request GET --url http://localhost:9999/contagem-pessoas`

## Conclusões finais

Mesmo chegando atrasado na brincadeira, foi uma experiência bacana, aproveitei para aprender sobre o bun e também um substituto ao Express o Elysia, e mesmo não focando na performance com essa aplicação fui capaz de chegar em `23702` pessoas cadastradas no banco (métrica utilizada pela rinha para definir os ganhadores) e com essa quantidade eu entraria na posição `#23` e estou mais do que satisfeito com isso ~~(mesmo minha aplicação ter sofrido para aguentar o tranco do teste de carga, com mais falhas do que requisições de sucesso heheheh)~~.

Se quiserem mais detalhes deixei em `./resultados` o retorno dos testes de carga do Gatling.
