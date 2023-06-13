import { LoginUserModel } from '@/domain-model/model/LoginUserModel';

export interface LoginUserRepository {
    findAll(): Promise<LoginUserModel[]>;
    findById(id: string): Promise<LoginUserModel>;
    create(model: LoginUserModel): Promise<LoginUserModel>;
    update(id: string, model: LoginUserModel): Promise<LoginUserModel>;
    delete(id: string): Promise<void>;
}
