import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Owner {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({name: "contact_no"})
    contactNo: string;

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;
}
