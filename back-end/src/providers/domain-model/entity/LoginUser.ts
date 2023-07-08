import { Entity, PrimaryColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';
import { LoginUserRole } from '@/providers/domain-model/entity/LoginUserRole';
import { Expose } from 'class-transformer';

@Entity({ name: 'm_login_user' })
export class LoginUser {
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
    // loginUserRoles?: Array<LoginUserRole>;
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
    // this.loginUserRoles = options?.loginUserRoles || new Array<LoginUser>;
  }

  @Expose()
  @PrimaryColumn({ length: 256 })
  public account: string;

  // Node.jsでパスワードのエンコードをどうするか調べる
  @Expose()
  @Column({ length: 256 })
  public password: string;

  @Expose()
  @Column({ length: 256 })
  public userName: string;

  // アカウントが有効かどうかを示すフラグ
  @Expose()
  @Column()
  public enabled: boolean;

  // アカウントの有効期限が切れているかどうかを示すフラグ
  @Expose()
  @Column()
  public accountNonExpired: boolean;

  // 資格情報の有効期限が切れているかどうかを示すフラグ
  @Expose()
  @Column()
  public accountNonLocked: boolean;

  // アカウントがロックされているかどうかを示すフラグ
  @Expose()
  @Column()
  public credentialsNonExpired: boolean;

  @Expose()
  @Column()
  public sortOrder: number;

  @Expose()
  @Column()
  public isDeleted: boolean;

  @Expose()
  @CreateDateColumn()
  public createdAt: Date;

  @Expose()
  @UpdateDateColumn()
  public updatedAt: Date;

  @Expose()
  @VersionColumn()
  public timestamp: number;

  // ユーザーが持つ権限のリスト
  // @JoinColumn()
  @Expose()
  @OneToMany(() => LoginUserRole, (loginUserRole) => loginUserRole.loginUser, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  public loginUserRoles!: Array<LoginUserRole>;
}
