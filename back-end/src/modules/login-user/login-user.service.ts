import { Inject, Injectable } from '@nestjs/common';

import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { LoginUserRepository } from '@/providers/infrastructure/repository/login-user.repository';
import { ConstantTokens } from '@/providers/domain-model/constant/ConstantTokens';

export interface ILoginUserService {
  findAll(): Promise<LoginUserModel[]>;
  findById(account: string): Promise<LoginUserModel>;
  create(loginUserModel: LoginUserModel): Promise<void>;
  update(account: string, loginUserModel: LoginUserModel): Promise<void>;
  delete(account: string): Promise<void>;
  sort(sortLists: Record<string, number>[]): Promise<void>;
}

@Injectable()
export class LoginUserService implements ILoginUserService {
  constructor(
    @Inject(ConstantTokens.ILoginUserRepository)
    private readonly loginUserRepository: LoginUserRepository,
  ) {}

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
