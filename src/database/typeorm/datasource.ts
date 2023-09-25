import { DataSource } from "typeorm";

const dir = import.meta.dir;

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "postgres://postgres:postgres@db:5432/postgres",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "db",
  entities: [
    `${dir}/entity/*.entity.ts}`
  ],
  migrations: [
    `${dir}/migration/*.ts}`
  ],
});

PostgresDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  });

export default PostgresDataSource;
