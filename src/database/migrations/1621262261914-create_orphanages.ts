import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createOrphanages1621262261914 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: "varchar",

                },
                {
                    name: 'longitude',
                    type: "decimal",
                    scale: 10,
                    precision: 2

                },
                {
                    name: 'latitude',
                    type: "decimal",
                    scale: 10,
                    precision: 2
                },
                {
                    name: 'about',
                    type: "text"
                },
                {
                    name: 'instrutions',
                    type: "text"
                },
                {
                    name: 'open_on_weekend',
                    type: "boolean",
                    default: false
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orphanages')
    }

}
