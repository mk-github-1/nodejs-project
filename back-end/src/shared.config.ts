/*
 * 共用するデータベース設定(開発用)
 * ・TypeORMのマイグレーション設定
 * ・Rest.jsのTypeORM設定
 */
type SupportedDatabaseType = 'mysql';

export const sharedConfig: {
    type: SupportedDatabaseType;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
    logging: boolean;
    entities: string[];
    migrations: string[];
    subscribers: string[]; // any[] ?
} = {
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
};
