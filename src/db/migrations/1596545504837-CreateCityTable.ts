import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class CreateCityTable1596545504837 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.createTable(new Table({
			name: 'cities',
			columns: [
				{
					name: 'id',
					type: 'INTEGER',
					isPrimary: true,
					isGenerated: true,
					generationStrategy: 'increment'
				},
				{
					name: 'city_name',
					type: 'TEXT',
					isNullable: false
				},
				{
					name: 'time',
					type: 'TEXT',
					isNullable: false
				},
				{
					name: 'temperature',
					type: 'REAL',
					isNullable: false
				}
			]
		}), true);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		return await queryRunner.dropTable('cities');
	}

}
