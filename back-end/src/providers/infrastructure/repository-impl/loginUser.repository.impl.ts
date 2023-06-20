import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { LoginUser } from '@/providers/domain-model/entity/LoginUser';
// import { LoginUserRole } from '@/providers/domain-model/entity/LoginUserRole';
import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { LoginUserRepository } from '@/providers/domain-service/repository/loginUser.repository';

@Injectable()
export class LoginUserRepositoryImpl implements LoginUserRepository {
    constructor(
        @InjectRepository(LoginUser)
        private readonly repository: Repository<LoginUser>,
    ) {}

    async findAll(): Promise<LoginUserModel[]> {
        const entities = await this.repository.find();

        return entities.map((entity) => plainToClass(LoginUserModel, entity));
    }

    async findById(account: string): Promise<LoginUserModel> {
        const entity = await this.repository.findOne({ where: { account } });

        if (!entity) {
            throw new Error('Entity not found');
        }

        return plainToClass(LoginUserModel, entity);
    }

    async create(loginUserModel: LoginUserModel): Promise<LoginUserModel> {
        const entity = plainToClass(LoginUser, loginUserModel);
        const createdEntity = await this.repository.save(entity);

        return plainToClass(LoginUserModel, createdEntity);
    }

    // account == id
    async update(account: string, loginUserModel: LoginUserModel): Promise<LoginUserModel> {
        const entity = await this.repository.findOne({ where: { account } });
        if (!entity) {
            throw new Error('Entity not found');
        }

        // Update entity properties with model data
        entity.account = loginUserModel.account;
        entity.password = loginUserModel.password;
        entity.userName = loginUserModel.userName;
        entity.enabled = loginUserModel.enabled;
        entity.accountNonExpired = loginUserModel.accountNonExpired;
        entity.accountNonLocked = loginUserModel.accountNonLocked;
        entity.credentialsNonExpired = loginUserModel.credentialsNonExpired;
        entity.sortOrder = loginUserModel.sortOrder;
        entity.isDeleted = loginUserModel.isDeleted;
        entity.createdAt = loginUserModel.createdAt;
        entity.updatedAt = loginUserModel.updatedAt;
        entity.timestamp = loginUserModel.timestamp;

        entity.loginUserRoles = [];

        const updatedEntity = await this.repository.save(entity);
        return plainToClass(LoginUserModel, updatedEntity);
    }

    async delete(id: string): Promise<void> {
        const result = await this.repository.delete(id);

        if (result.affected === 0) {
            throw new Error('Entity not found');
        }
    }
}
