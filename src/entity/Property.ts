import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { User } from "./User";
import { Owner } from "./Owner";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address: string;

    @ManyToOne(type => Owner)
    @JoinColumn({ name: 'owner_id' })
    owner: Owner

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;
}
