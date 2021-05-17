import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class teste1621264084086 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "teste",
            columns: [
                {
                    name: 'testando',
                    type: "integer",
                    isPrimary: false,
                    isGenerated: false,

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('teste')
    }

}
