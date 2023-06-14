/*
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

    async create(model: LoginUserModel): Promise<LoginUserModel> {
        const entity = plainToClass(LoginUser, model);
        const createdEntity = await this.repository.save(entity);

        return plainToClass(LoginUserModel, createdEntity);
    }

    // account == id
    async update(account: string, model: LoginUserModel): Promise<LoginUserModel> {
        const entity = await this.repository.findOne({ where: { account } });
        if (!entity) {
            throw new Error('Entity not found');
        }

        // Update entity properties with model data
        entity.account = model.account;
        entity.password = model.password;
        entity.userName = model.userName;
        entity.enabled = model.enabled;
        entity.accountNonExpired = model.accountNonExpired;
        entity.accountNonLocked = model.accountNonLocked;
        entity.credentialsNonExpired = model.credentialsNonExpired;
        entity.sortOrder = model.sortOrder;
        entity.isDeleted = model.isDeleted;
        entity.createdAt = model.createdAt;
        entity.updatedAt = model.updatedAt;
        entity.timestamp = model.timestamp;

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
 */
