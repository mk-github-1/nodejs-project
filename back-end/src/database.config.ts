/*
 * Rest.jsのTypeORM設定
 */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { sharedConfig } from './shared.config';

import { LoginUser } from './providers/domain-model/entity/LoginUser';
import { Role } from './providers/domain-model/entity/Role';
import { LoginUserRole } from './providers/domain-model/entity/LoginUserRole';

export const databaseConfig: TypeOrmModuleOptions = {
  type: sharedConfig.type,
  host: sharedConfig.host,
  port: sharedConfig.port,
  username: sharedConfig.username,
  password: sharedConfig.password,
  database: sharedConfig.database,
  synchronize: sharedConfig.synchronize,
  logging: sharedConfig.logging,
  // Nest.jsはtsファイルだとエラーするのでentityを指定する必要がある
  entities: [LoginUser, Role, LoginUserRole],
  migrations: sharedConfig.migrations,
  subscribers: sharedConfig.subscribers,
};
