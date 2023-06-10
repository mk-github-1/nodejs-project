/*
 * TypeORMのマイグレーション用のTypeORM設定
 */
import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '0000',
    database: 'test_db',
    synchronize: false,
    logging: false,
    entities: ['src/domain-model/entity/*.ts', 'src/domain-model/entity/**/*.ts'],
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
});
