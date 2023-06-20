import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';

export interface LoginUserRepository {
    findAll(): Promise<LoginUserModel[]>;
    findById(id: string): Promise<LoginUserModel>;
    create(loginUserModel: LoginUserModel): Promise<LoginUserModel>;
    update(id: string, loginUserModel: LoginUserModel): Promise<LoginUserModel>;
    delete(id: string): Promise<void>;
}
