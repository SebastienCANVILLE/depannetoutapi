import { UserRoleEnum } from 'src/enum/user-role.enum';
import { Reservation } from 'src/reservations/reservations.service';
import { Service } from 'src/services/entities/service.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    username : string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Column()
    adress_line1: string;

    @Column()
    adress_line2: string;

    @Column()
    adress_line3: string;

    @Column()
    zipCode: string;

    @Column()
    city: string;

    @Column()
    salt: string;

    @Column({
        type: 'enum',
        enum: UserRoleEnum,
        default: UserRoleEnum.USER
    })
    role: string;

    @OneToMany(() => Service, service => service.user)
    services: Service[]

    @OneToMany(() => Reservation, reservation => reservation.user)
    reservations: Reservation[]

}