import { DataSource } from 'typeorm';
import { Person } from './entity/person.entity';
import { CreatePersonsTable1696773846748 } from './migration/1696773846748-CreatePersonsTable.ts';

const dir = import.meta.dir;

const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'db',
  entities: [Person],
  migrations: [CreatePersonsTable1696773846748],
});

export default PostgresDataSource;
