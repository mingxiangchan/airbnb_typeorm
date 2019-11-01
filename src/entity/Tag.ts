import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { Property } from "./Property";

@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    label: string;

    @ManyToOne(type => Property)
    @JoinColumn({ name: 'property_id' })
    property: Property

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;
}
