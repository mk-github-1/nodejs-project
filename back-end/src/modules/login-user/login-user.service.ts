import { Injectable } from '@nestjs/common';

import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { ILoginUserRepository } from '@/providers/domain-service/i-repository/i-login-user.repository';
import { LoginUserRepository } from '@/providers/infrastructure/repository/login-user.repository';

@Injectable()
export class LoginUserService {
    constructor(private readonly loginUserRepository: LoginUserRepository) {}

    // 単純にメソッド呼び出しになっているが、実際は必要なものを実装する
    async findAll(): Promise<LoginUserModel[]> {
        try {
            return this.loginUserRepository.findAll();
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async findById(account: string): Promise<LoginUserModel> {
        try {
            return this.loginUserRepository.findById(account);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async create(loginUserModel: LoginUserModel): Promise<void> {
        try {
            return this.loginUserRepository.create(loginUserModel);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async update(account: string, loginUserModel: LoginUserModel): Promise<void> {
        try {
            return this.loginUserRepository.update(account, loginUserModel);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async delete(account: string): Promise<void> {
        try {
            return this.loginUserRepository.delete(account);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async sort(sortLists: Record<string, number>[]): Promise<void> {
        try {
            return this.loginUserRepository.sort(sortLists);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }
}
