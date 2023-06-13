export class RoleModel {
    public constructor(options?: {
        roleId?: string;
        roleName?: string;
        sortOrder?: number;
        isDeleted?: boolean;
        createdAt?: Date;
        updatedAt?: Date;
        timestamp?: number;
    }) {
        this.roleId = options?.roleId || '';
        this.roleName = options?.roleName || '';
        this.sortOrder = options?.sortOrder || 0;
        this.isDeleted = options?.isDeleted || false;
        this.createdAt = options?.createdAt || new Date();
        this.updatedAt = options?.updatedAt || new Date();
        this.timestamp = options?.timestamp || 0;
    }

    public roleId: string;

    public roleName: string;

    public sortOrder: number;

    public isDeleted: boolean;

    public createdAt: Date;

    public updatedAt: Date;

    public timestamp: number;
}
