import { Reservation } from "src/reservations/entities/reservation.entity";
import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, OneToMany, Timestamp, PrimaryGeneratedColumn, OneToOne } from "typeorm";


@Entity()
export class Service extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type:'money'})
    price: number

    @Column()
    city: string;

    @Column()
    start_time: Date;

    @Column()
    end_time: Date;

    @Column()
    reserved: boolean;

    @OneToMany(() => User, user => user.services)
    users: User[];
    
    @OneToOne(() => Reservation, service => service.reservations)
    reservations: any;
    


}
