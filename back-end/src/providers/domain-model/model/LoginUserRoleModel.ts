import { Exclude, Expose } from 'class-transformer';

import { LoginUserModel } from '@/providers/domain-model/model/LoginUserModel';
import { RoleModel } from '@/providers/domain-model/model/RoleModel';

export class LoginUserRoleModel {
  public constructor(options?: { account?: string; roleId?: string; sortOrder?: number; isDeleted?: boolean; createdAt?: Date; updatedAt?: Date; timestamp?: number; loginUserModel?: LoginUserModel; roleModel?: RoleModel }) {
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

  public loginUserModel: LoginUserModel;

  @Expose()
  public roleModel: RoleModel;
}
