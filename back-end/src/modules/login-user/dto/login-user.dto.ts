import { Expose } from 'class-transformer';

export class LoginUserDto {
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
        loginUserRoleDtos?: Array<LoginUserRoleDto>;
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
        this.loginUserRoleDtos = options?.loginUserRoleDtos || new Array<LoginUserRoleDto>();
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
    public loginUserRoleDtos: Array<LoginUserRoleDto>;
}

export class LoginUserRoleDto {
    public constructor(options?: { account?: string; roleId?: string; sortOrder?: number; isDeleted?: boolean; createdAt?: Date; updatedAt?: Date; timestamp?: number }) {
        this.account = options?.account || '';
        this.roleId = options?.roleId || '';
        this.sortOrder = options?.sortOrder || 0;
        this.isDeleted = options?.isDeleted || false;
        this.createdAt = options?.createdAt || new Date();
        this.updatedAt = options?.updatedAt || new Date();
        this.timestamp = options?.timestamp || 0;
    }

    @Expose()
    public account: string;

    @Expose()
    public roleId: string;

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
}