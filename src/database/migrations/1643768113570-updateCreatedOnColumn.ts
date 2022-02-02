import {MigrationInterface, QueryRunner} from "typeorm";

export class updateCreatedOnColumn1643768113570 implements MigrationInterface {
    name = 'updateCreatedOnColumn1643768113570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdOn" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdOn" DROP DEFAULT`);
    }

}
