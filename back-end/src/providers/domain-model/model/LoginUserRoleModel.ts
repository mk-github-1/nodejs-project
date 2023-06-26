import { Exclude, Expose } from 'class-transformer';

import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { RoleModel } from '@/providers/domain-model/model/RoleModel';

export class LoginUserRoleModel {
    public constructor(options?: {
        account?: string;
        roleId?: string;
        sortOrder?: number;
        isDeleted?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        timestamp?: number;
        loginUserModel?: LoginUserModel;
        roleModel?: RoleModel;
    }) {
        this.account = options?.account || '';
        this.roleId = options?.roleId || '';
        this.sortOrder = options?.sortOrder || 0;
        this.isDeleted = options?.isDeleted || false;
        this.createdAt = options?.createdAt || new Date();
        this.updatedAt = options?.updatedAt || new Date();
        this.timestamp = options?.timestamp || 0;
        this.loginUserModel = options?.loginUserModel || new LoginUserModel();
        this.roleModel = options?.roleModel || new RoleModel();
    }

    public account: string;

    public roleId: string;

    public sortOrder: number;

    public isDeleted: boolean;

    public createdAt: Date;

    public updatedAt: Date;

    public timestamp: number;

    public loginUserModel: LoginUserModel;

    public roleModel: RoleModel;
}
