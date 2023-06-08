import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../src/domain-model/entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    // 開発環境のDBの設定をする
    username: "root",
    password: "0000",
    database: "testdb",
    synchronize: false, // 開発時 true or 本番時 false
    logging: false,
    // entities: [User],
    entities: [
        "src/domain-model/entity/*.ts",
        "src/domain-model/entity/**/*.ts",
    ],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
});
