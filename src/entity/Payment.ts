import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { Booking } from "./Booking";

@Entity()
export class Payment {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    amount: number;

    @ManyToOne(type => Booking)
    @JoinColumn({ name: 'booking_id' })
    booking: Booking

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;
}
