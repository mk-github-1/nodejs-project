import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { LoginUser } from '@/providers/domain-model/entity/LoginUser';
import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { LoginUserRoleModel } from '@/providers/domain-model/model/LoginUserRoleModel';
import { ILoginUserRepository } from '@/providers/domain-service/i-repository/i-login-user.repository';

@Injectable()
export class LoginUserRepository implements ILoginUserRepository {
    constructor(
        @InjectRepository(LoginUser)
        private readonly loginUserRepository: Repository<LoginUser>,
    ) {}

    async findAll(): Promise<Array<LoginUserModel>> {
        // データ操作 → Entity to Model マッピング
        const loginUsers: Array<LoginUser> = await this.loginUserRepository.find({
            relations: ['loginUserRoles'],
        });

        const loginUsersModel: Array<LoginUserModel> = new Array<LoginUserModel>();

        // .forEachが使えるかも
        for (const loginUser of loginUsers) {
            const loginUserModel: LoginUserModel = plainToClass(LoginUserModel, loginUser);

            // 【関連データの取得に失敗している】
            if (loginUser.loginUserRoles) {
                let loginUserRoleModels: Array<LoginUserRoleModel> = loginUser.loginUserRoles.map(
                    (role) => plainToClass(LoginUserRoleModel, role),
                );

                // loginUserRole.loginUserModel = undefined;
                // loginUserRole.roleModel = undefined;

                loginUserModel.loginUserRoleModels = loginUserRoleModels;
            }

            loginUsersModel.push(loginUserModel);
        }

        return loginUsersModel;
    }

    // 通常は id: number
    async findById(account: string): Promise<LoginUserModel> {
        // データ操作 → Entity to Model マッピング
        const loginUser: LoginUser = await this.loginUserRepository.findOne({
            where: { account },
            relations: ['loginUserRoles'],
        });

        const userRoles: Array<LoginUserRoleModel> = loginUser.loginUserRoles.map((role) =>
            plainToClass(LoginUserRoleModel, role),
        );
        const loginUserModel: LoginUserModel = plainToClass(LoginUserModel, loginUser);
        loginUserModel.loginUserRoleModels = userRoles;

        return loginUserModel;
    }

    async create(loginUserModel: LoginUserModel): Promise<void> {
        // Model to Entity マッピング → データ操作
        const loginUser: LoginUser = plainToClass(LoginUser, loginUserModel);

        // 関連Modelのマッピングが必要
        // write code

        await this.loginUserRepository.create(loginUser);
    }

    async update(account: string, loginUserModel: LoginUserModel): Promise<void> {
        // Model to Entity マッピング → データ操作
        const loginUser: LoginUser = plainToClass(LoginUser, loginUserModel);

        // 関連Modelのマッピングが必要
        // write code

        await this.loginUserRepository.update(account, loginUserModel);
    }

    async delete(account: string): Promise<void> {
        // データ操作
        await this.loginUserRepository.delete(account);
    }

    // 通常はArray<Record<number, number>>
    async sort(sortLists: Array<Record<string, number>>): Promise<void> {
        // 同じ順序がある時、更新日の新しいものを上にする、isDelete == trueは順序を後にする
        let query: string = `DECLARE @temp TABLE ( 
            account varchar(256) NOT NULL, 
            sortOrder int NOT NULL 
            ) `;

        for (const item of sortLists) {
            query += `INSERT INTO @temp (account, sortOrder) VALUES (${item.Key}, ${item.Value}) `;
        }

        query += `UPDATE m_login_user 
            SET sortOrder = B.sortOrder 
            FROM m_login_user AS A 
            LEFT OUTER JOIN ( 
               SELECT C.account, ROW_NUMBER() OVER ( 
                   ORDER BY 
                       C.isDeleted ASC, 
                       D.sortOrder ASC, 
                       C.updatedAt DESC 
                ) AS 'sortOrder' 
                FROM m_login_user AS C 
                LEFT OUTER JOIN @temp AS D 
                ON C.account = D.account 
            ) AS B 
            ON A.account = B.account 
            WHERE B.account IS NOT NULL `;

        await this.loginUserRepository.query(query);
    }
}
