import {MigrationInterface, QueryRunner} from "typeorm";

export class MigrationFileName1572568077314 implements MigrationInterface {
    name = 'MigrationFileName1572568077314'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "owner" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "email" nvarchar(255) NOT NULL, "contact_no" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_be784758029428f309481ffdbbf" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_73509c8ebf61fb8ad756d1a46f3" DEFAULT getdate(), CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "property" ("id" int NOT NULL IDENTITY(1,1), "address" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_81198b0b6b914eeead02c2214d2" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_e02237374f140f496afbc987263" DEFAULT getdate(), "owner_id" int, CONSTRAINT "PK_d80743e6191258a5003d5843b4f" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" int NOT NULL IDENTITY(1,1), "name" nvarchar(255) NOT NULL, "contact_no" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_d091f1d36f18bbece2a9eabc6e0" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_9cdce43fa0043c794281aa09051" DEFAULT getdate(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "booking" ("id" int NOT NULL IDENTITY(1,1), "price" int NOT NULL, "booking_date" date NOT NULL, "check_in" datetime NOT NULL, "check_out" datetime NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_5f3da1d174503855f57421f692d" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_e3cc0c008e9a70922a8f04a3641" DEFAULT getdate(), "user_id" int, "property_id" int, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "property" ADD CONSTRAINT "FK_2541d2fb798d385a0521553370d" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_5597161ba02971a62c629fc5a44" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_5597161ba02971a62c629fc5a44"`, undefined);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_276896d1a1a30be6de9d7d43f53"`, undefined);
        await queryRunner.query(`ALTER TABLE "property" DROP CONSTRAINT "FK_2541d2fb798d385a0521553370d"`, undefined);
        await queryRunner.query(`DROP TABLE "booking"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "property"`, undefined);
        await queryRunner.query(`DROP TABLE "owner"`, undefined);
    }

}
