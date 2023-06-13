import {
    Entity,
    PrimaryColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from 'typeorm';
import { LoginUser } from './LoginUser';
import { Role } from './Role';

@Entity({ name: 'm_login_user_role' })
export class LoginUserRole {
    public constructor(options?: {
        account?: string;
        roleId?: string;
        sortOrder?: number;
        isDeleted?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        timestamp?: number;
        loginUser?: LoginUser;
        role?: Role;
    }) {
        this.account = options?.account || '';
        this.roleId = options?.roleId || '';
        this.sortOrder = options?.sortOrder || 0;
        this.isDeleted = options?.isDeleted || false;
        this.createdAt = options?.createdAt || new Date();
        this.updatedAt = options?.updatedAt || new Date();
        this.timestamp = options?.timestamp || 0;
        this.loginUser = options?.loginUser || new LoginUser();
        this.role = options?.role || new Role();
    }

    @PrimaryColumn({ length: 256 })
    public account: string;

    @PrimaryColumn({ length: 32 })
    public roleId: string;

    @Column()
    public sortOrder: number;

    @Column()
    public isDeleted: boolean;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;

    @VersionColumn()
    public timestamp: number;

    @ManyToOne(() => LoginUser)
    @JoinColumn({ name: 'account', referencedColumnName: 'account' })
    public loginUser: LoginUser;

    @ManyToOne(() => Role)
    @JoinColumn({ name: 'roleId', referencedColumnName: 'roleId' })
    public role: Role;
}
