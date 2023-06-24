import { Injectable } from '@nestjs/common';

import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { LoginUserRepository } from '@/providers/infrastructure/repository/login-user.repository';

@Injectable()
export class LoginUserService {
    constructor(private readonly loginUserRepository: LoginUserRepository) {}

    // ①まずServiceを解決する
    // ②その後、Repositoryを解決する

    // 単純にメソッド呼び出しになっているが、実際は必要なものを実装する
    async findAll(): Promise<LoginUserModel[]> {
        try {
            return [];
            // return this.loginUserRepository.findAll();
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async findById(account: string): Promise<LoginUserModel> {
        try {
            return null;
            // return this.loginUserRepository.findById(account);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async create(loginUserModel: LoginUserModel): Promise<void> {
        try {
            return null;
            // return this.loginUserRepository.create(loginUserModel);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async update(account: string, loginUserModel: LoginUserModel): Promise<void> {
        try {
            return null;
            // return this.loginUserRepository.update(account, loginUserModel);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async delete(account: string): Promise<void> {
        try {
            return null;
            // return this.loginUserRepository.delete(account);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }

    async sort(sortLists: Record<string, number>[]): Promise<void> {
        try {
            return null;
            // return this.loginUserRepository.sort(sortLists);
        } catch (exception) {
            console.error(exception);
            throw new Error('データの操作に失敗しました。(リソースを使用)');
        }
    }
}
