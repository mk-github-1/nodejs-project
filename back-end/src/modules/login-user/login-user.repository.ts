import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

import { LoginUser } from '@/providers/domain-model/entity/LoginUser';
import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { LoginUserRoleModel } from '@/providers/domain-model/model/LoginUserRoleModel';
import { IGenericRepository } from '@/providers/IGenericRepository';

/*
 * Interface (CRUD + sort)
 */
export interface ILoginUserRepository extends IGenericRepository<LoginUserModel> {
    findAll(): Promise<LoginUserModel[]>;
    findById(account: string): Promise<LoginUserModel>;
    create(loginUserModel: LoginUserModel): Promise<void>;
    update(account: string, loginUserModel: LoginUserModel): Promise<void>;
    delete(account: string): Promise<void>;
    sort(sortLists: Record<string, number>[]): Promise<void>;
}

/*
 * Class
 */
@Injectable()
export class LoginUserRepository implements ILoginUserRepository {
    constructor(
        @InjectRepository(LoginUser)
        private loginUserRepository: Repository<LoginUser>,
    ) {}

    async findAll(): Promise<LoginUserModel[]> {
        // データ操作 → Entity to Model マッピング
        const loginUsers: LoginUser[] = await this.loginUserRepository.find();

        const loginUsersModel: LoginUserModel[] = [];

        for (const loginUser of loginUsers) {
            const loginUserRoleModels: LoginUserRoleModel[] = loginUser.loginUserRoles.map((role) =>
                plainToClass(LoginUserRoleModel, role),
            );
            const loginUserModel: LoginUserModel = plainToClass(LoginUserModel, loginUser);
            loginUserModel.loginUserRoleModels = loginUserRoleModels;
            loginUsersModel.push(loginUserModel);
        }

        return loginUsersModel;
    }

    // 通常は id: number
    async findById(account: string): Promise<LoginUserModel> {
        // データ操作 → Entity to Model マッピング
        const loginUser: LoginUser = await this.loginUserRepository.findOne({ where: { account } });

        const userRoles: LoginUserRoleModel[] = loginUser.loginUserRoles.map((role) =>
            plainToClass(LoginUserRoleModel, role),
        );
        const loginUserModel: LoginUserModel = plainToClass(LoginUserModel, loginUser);
        loginUserModel.loginUserRoleModels = userRoles;

        return loginUserModel;
    }

    async create(loginUserModel: LoginUserModel): Promise<void> {
        // Model to Entity マッピング → データ操作
        const loginUser: LoginUser = plainToClass(LoginUser, loginUserModel);
        await this.loginUserRepository.create(loginUser);
    }

    async update(account: string, loginUserModel: LoginUserModel): Promise<void> {
        // Model to Entity マッピング → データ操作
        const loginUser: LoginUser = plainToClass(LoginUser, loginUserModel);
        await this.loginUserRepository.update(account, loginUserModel);
    }

    async delete(account: string): Promise<void> {
        // データ操作
        await this.loginUserRepository.delete(account);
    }

    // 通常はRecord<number, number>[]
    async sort(sortLists: Record<string, number>[]): Promise<void> {
        // ソート処理のSQLを実装する
        const query = 'SELECT * FROM your_table';
        const result = await this.loginUserRepository.query(query);
    }
}
