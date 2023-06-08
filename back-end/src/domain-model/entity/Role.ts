import { time } from "console";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    PrimaryColumn,
    Long,
    CreateDateColumn,
    UpdateDateColumn,
    VersionColumn,
} from "typeorm";

@Entity({ name: "m_role" })
export class Role {
    public constructor(options?: {
        roleId?: string;
        roleName?: string;
        sortOrder?: number;
        isDeleted?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        timestamp?: number;
    }) {
        this.roleId = options?.roleId || "";
        this.roleName = options?.roleName || "";
        this.sortOrder = options?.sortOrder || 0;
        this.isDeleted = options?.isDeleted || false;
        this.createdAt = options?.createdAt || new Date();
        this.updatedAt = options?.updatedAt || new Date();
        this.timestamp = options?.timestamp || 0;
    }

    @PrimaryColumn({ length: 32 })
    public roleId: string;

    @Column({ length: 256 })
    public roleName: string;

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
}
