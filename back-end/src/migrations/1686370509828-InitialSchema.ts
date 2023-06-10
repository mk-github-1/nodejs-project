import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialSchema1686370509828 implements MigrationInterface {
  name = 'InitialSchema1686370509828';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`m_login_user\` (\`account\` varchar(256) NOT NULL, \`password\` varchar(256) NOT NULL, \`userName\` varchar(256) NOT NULL, \`enabled\` tinyint NOT NULL, \`accountNonExpired\` tinyint NOT NULL, \`accountNonLocked\` tinyint NOT NULL, \`credentialsNonExpired\` tinyint NOT NULL, \`sortOrder\` int NOT NULL, \`isDeleted\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`timestamp\` int NOT NULL, PRIMARY KEY (\`account\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`m_role\` (\`roleId\` varchar(32) NOT NULL, \`roleName\` varchar(256) NOT NULL, \`sortOrder\` int NOT NULL, \`isDeleted\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`timestamp\` int NOT NULL, PRIMARY KEY (\`roleId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`m_login_user_role\` (\`account\` varchar(256) NOT NULL, \`roleId\` varchar(32) NOT NULL, \`sortOrder\` int NOT NULL, \`isDeleted\` tinyint NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`timestamp\` int NOT NULL, PRIMARY KEY (\`account\`, \`roleId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`m_login_user_role\` ADD CONSTRAINT \`FK_2ecec877de63567b2eebff38701\` FOREIGN KEY (\`account\`) REFERENCES \`m_login_user\`(\`account\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`m_login_user_role\` ADD CONSTRAINT \`FK_563e6e44d2d67059e8b18c709ce\` FOREIGN KEY (\`roleId\`) REFERENCES \`m_role\`(\`roleId\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`m_login_user_role\` DROP FOREIGN KEY \`FK_563e6e44d2d67059e8b18c709ce\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`m_login_user_role\` DROP FOREIGN KEY \`FK_2ecec877de63567b2eebff38701\``,
    );
    await queryRunner.query(`DROP TABLE \`m_login_user_role\``);
    await queryRunner.query(`DROP TABLE \`m_role\``);
    await queryRunner.query(`DROP TABLE \`m_login_user\``);
  }
}
