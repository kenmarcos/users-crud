import {MigrationInterface, QueryRunner} from "typeorm";

export class updateUpdatedOnColumn1643768581105 implements MigrationInterface {
    name = 'updateUpdatedOnColumn1643768581105'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedOn" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedOn" DROP DEFAULT`);
    }

}
