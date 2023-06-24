import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { IGenericRepository } from '@/providers/IGenericRepository';

export interface ILoginUserRepository extends IGenericRepository<LoginUserModel> {
    findAll(): Promise<LoginUserModel[]>;
    findById(account: string): Promise<LoginUserModel>;
    create(loginUserModel: LoginUserModel): Promise<void>;
    update(account: string, loginUserModel: LoginUserModel): Promise<void>;
    delete(account: string): Promise<void>;
    sort(sortLists: Record<string, number>[]): Promise<void>;
}
