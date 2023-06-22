import { Repository } from 'typeorm';
import { classToPlain, plainToClass } from 'class-transformer';

import { LoginUser } from '@/providers/domain-model/entity/LoginUser';
import { LoginUserRole } from '@/providers/domain-model/entity/LoginUserRole';
import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { LoginUserRoleModel } from '@/providers/domain-model/model/LoginUserRoleModel';
import { Injectable } from '@nestjs/common';

// @Injectable
export class LoginUserRepository extends Repository<LoginUser> {
    /*
    async findAll(): Promise<LoginUserRoleModel[]> {
        const loginUsers: LoginUser[] = await this.find();
        const loginUserRoles: LoginUserRoleModel[] = loginUsers.map((e) => {
            const { roles, ...userData } = e;
            const roleModels: LoginUserRoleModel[] = roles.map((role) => {
                // roleをLoginUserRoleModelに変換する処理を実行する
                // 例: const roleModel: LoginUserRoleModel = plainToClass(LoginUserRoleModel, role);
                //     return roleModel;
            });
            return {
                ...userData,
                roles: roleModels,
            };
        });
        return userRoles;
    }
     */

    // id: number -> account: string
    /*
    async findById(account: string): Promise<LoginUserModel> {
        const user: LoginUser = await this.findOne({ account });
        return plainToClass(LoginUserModel, user);
    }
     */

    async createLoginUser(loginUserModel: LoginUserModel): Promise<void> {
        const loginUser: LoginUser = this.create(loginUserModel);
    }

    async updateLoginUser(account: string, loginUserModel: LoginUserModel): Promise<void> {
        await this.update(account, loginUserModel);
    }

    async deleteLoginUser(account: string): Promise<void> {
        await this.delete(account);
    }
}
