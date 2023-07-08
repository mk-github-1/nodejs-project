import { Expose } from 'class-transformer';
import { IsBoolean, IsDate, IsInt, IsNotEmpty, IsString, Max, MaxLength, Min } from 'class-validator';

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
  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  public account: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  public password: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  public userName: string;

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  public enabled: boolean;

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  public accountNonExpired: boolean;

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  public accountNonLocked: boolean;

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  public credentialsNonExpired: boolean;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  @Max(Number.MAX_VALUE)
  @Min(1)
  public sortOrder: number;

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  public isDeleted: boolean;

  @Expose()
  @IsDate()
  public createdAt: Date;

  @Expose()
  @IsDate()
  public updatedAt: Date;

  @Expose()
  @IsInt()
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
  @IsNotEmpty()
  @IsString()
  @MaxLength(256)
  public account: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  public roleId: string;

  @Expose()
  @IsNotEmpty()
  @IsInt()
  @Max(Number.MAX_VALUE)
  @Min(1)
  public sortOrder: number;

  @Expose()
  @IsNotEmpty()
  @IsBoolean()
  public isDeleted: boolean;

  @Expose()
  @IsDate()
  public createdAt: Date;

  @Expose()
  @IsDate()
  public updatedAt: Date;

  @Expose()
  @IsInt()
  public timestamp: number;
}
