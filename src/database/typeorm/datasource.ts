import { DataSource } from "typeorm";

const dir = import.meta.dir;

const PostgresDataSource = new DataSource({
  type: "postgres",
  host: "db",
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

export default PostgresDataSource;
