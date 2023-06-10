/*
 * Rest.jsのTypeORM設定
 */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '0000',
  database: 'test_db',
  synchronize: false, // 開発時 true or 本番時 false
  logging: false,
  // entities: [User],
  entities: ['src/domain-model/entity/*.ts', 'src/domain-model/entity/**/*.ts'],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
};
