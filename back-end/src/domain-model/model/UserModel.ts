export class UserModel {
    public constructor(options?: {
        id?: number;
        firstName?: string;
        lastName?: string;
        age?: number;
    }) {
        this.id = options?.id || 0;
        this.firstName = options?.firstName || "";
        this.lastName = options?.lastName || "";
        this.age = options?.age || 0;
    }

    public id: number;

    public firstName: string;

    public lastName: string;

    public age: number;
}
