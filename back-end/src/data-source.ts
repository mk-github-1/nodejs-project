/*
 * TypeORMのマイグレーション設定
 */
import { DataSource } from 'typeorm';
import { sharedConfig } from './shared.config';

export const AppDataSource: DataSource = new DataSource({
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
});
