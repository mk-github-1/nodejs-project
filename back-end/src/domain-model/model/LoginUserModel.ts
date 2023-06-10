import { LoginUserRoleModel } from './LoginUserRoleModel';

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

  public loginUserRoleModels!: LoginUserRoleModel[];
}
