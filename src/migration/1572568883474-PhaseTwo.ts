import {MigrationInterface, QueryRunner} from "typeorm";

export class PhaseTwo1572568883474 implements MigrationInterface {
    name = 'PhaseTwo1572568883474'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "payment" ("id" int NOT NULL IDENTITY(1,1), "status" nvarchar(255) NOT NULL, "amount" int NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_2216ad74f64b73c04d5fb3c3610" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_6765c894a5ccf625b7b0a4ac9e3" DEFAULT getdate(), "booking_id" int, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "tag" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, "created_at" datetime2 NOT NULL CONSTRAINT "DF_7561a113607b9a3804c895442aa" DEFAULT getdate(), "updated_at" datetime2 NOT NULL CONSTRAINT "DF_12e318242b90834fb3b94c5654d" DEFAULT getdate(), "property_id" int, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_cee78453638dfaf440f1aa63c26" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "tag" ADD CONSTRAINT "FK_5a57171d80d68a286a52f283dc2" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "tag" DROP CONSTRAINT "FK_5a57171d80d68a286a52f283dc2"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_cee78453638dfaf440f1aa63c26"`, undefined);
        await queryRunner.query(`DROP TABLE "tag"`, undefined);
        await queryRunner.query(`DROP TABLE "payment"`, undefined);
    }

}
