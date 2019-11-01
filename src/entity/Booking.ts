import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";
import { Property } from "./Property";
import { User } from "./User";

@Entity()
export class Booking {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column("date", {name: "booking_date"})
    bookingDate;

    @Column("datetime", {name: "check_in"})
    checkIn;

    @Column("datetime", {name: "check_out"})
    checkOut;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'user_id' })
    user: User

    @ManyToOne(type => Property)
    @JoinColumn({ name: 'property_id' })
    property: Property

    @CreateDateColumn({name: "created_at"})
    createdAt;

    @UpdateDateColumn({name: "updated_at"})
    updatedAt;
}
