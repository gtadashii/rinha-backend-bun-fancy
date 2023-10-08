import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePersonsTable1696773846748 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('persons');
    if (table) return;
    await queryRunner.createTable(
      new Table({
        name: 'persons',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'nome',
            type: 'varchar',
          },
          {
            name: 'apelido',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'nascimento',
            type: 'date',
          },
          {
            name: 'stack',
            type: 'json',
          },
          {
            name: 'terms',
            type: 'varchar',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('persons');
  }
}
