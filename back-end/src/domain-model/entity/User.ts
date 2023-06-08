import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "m_user" })
export class User {
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

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public firstName: string;

    @Column()
    public lastName: string;

    @Column()
    public age: number;
}
