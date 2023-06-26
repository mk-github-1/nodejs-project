export class UpdateLoginUserDto {
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

    public account: string;

    public password: string;

    public userName: string;

    public enabled: boolean;

    public accountNonExpired: boolean;

    public accountNonLocked: boolean;

    public credentialsNonExpired: boolean;

    public sortOrder: number;

    public isDeleted: boolean;

    public createdAt: Date;

    public updatedAt: Date;

    public timestamp: number;

    public loginUserRoleDtos: Array<LoginUserRoleDto>;
}

export class LoginUserRoleDto {
    public constructor(options?: {
        account?: string;
        roleId?: string;
        sortOrder?: number;
        isDeleted?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        timestamp?: number;
    }) {
        this.account = options?.account || '';
        this.roleId = options?.roleId || '';
        this.sortOrder = options?.sortOrder || 0;
        this.isDeleted = options?.isDeleted || false;
        this.createdAt = options?.createdAt || new Date();
        this.updatedAt = options?.updatedAt || new Date();
        this.timestamp = options?.timestamp || 0;
    }

    public account: string;

    public roleId: string;

    public sortOrder: number;

    public isDeleted: boolean;

    public createdAt: Date;

    public updatedAt: Date;

    public timestamp: number;
}
