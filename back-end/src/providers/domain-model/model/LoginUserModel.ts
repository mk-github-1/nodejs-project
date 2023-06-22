import { Expose } from 'class-transformer';

import { LoginUserRoleModel } from '@/providers/domain-model/model/LoginUserRoleModel';

export class LoginUserModel {
    public constructor(options?: {
        account?: string;
        password?: string;
        userName?: string;
        enabled?: boolean;
        accountNonExpired?: boolean;
        accountNonLocked?: boolean;
        credentialsNonExpired?: boolean;
        sortOrder?: number;
        isDeleted?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        timestamp?: number;
        loginUserRoleModels?: LoginUserRoleModel[];
    }) {
        this.account = options?.account || '';
        this.password = options?.password || '';
        this.userName = options?.userName || '';
        this.enabled = options?.enabled || false;
        this.accountNonExpired = options?.accountNonExpired || false;
        this.accountNonLocked = options?.accountNonLocked || false;
        this.credentialsNonExpired = options?.credentialsNonExpired || false;
        this.sortOrder = options?.sortOrder || 0;
        this.isDeleted = options?.isDeleted || false;
        this.createdAt = options?.createdAt || new Date();
        this.updatedAt = options?.updatedAt || new Date();
        this.timestamp = options?.timestamp || 0;
        this.loginUserRoleModels = options?.loginUserRoleModels || [];
    }

    @Expose()
    public account: string;

    @Expose()
    public password: string;

    @Expose()
    public userName: string;

    @Expose()
    public enabled: boolean;

    @Expose()
    public accountNonExpired: boolean;

    @Expose()
    public accountNonLocked: boolean;

    @Expose()
    public credentialsNonExpired: boolean;

    @Expose()
    public sortOrder: number;

    @Expose()
    public isDeleted: boolean;

    @Expose()
    public createdAt: Date;

    @Expose()
    public updatedAt: Date;

    @Expose()
    public timestamp: number;

    @Expose()
    public loginUserRoleModels: LoginUserRoleModel[];
}
