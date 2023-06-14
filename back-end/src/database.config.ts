/*
 * Rest.jsのTypeORM設定
 */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { sharedConfig } from './shared.config';

export const databaseConfig: TypeOrmModuleOptions = {
    type: sharedConfig.type,
    host: sharedConfig.host,
    port: sharedConfig.port,
    username: sharedConfig.username,
    password: sharedConfig.password,
    database: sharedConfig.database,
    synchronize: sharedConfig.synchronize,
    logging: sharedConfig.logging,
    entities: sharedConfig.entities,
    migrations: sharedConfig.migrations,
    subscribers: sharedConfig.subscribers,
};
