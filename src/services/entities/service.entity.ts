import { User } from "src/users/entities/user.entity";
import { BaseEntity, Column, Entity, OneToMany, Timestamp } from "typeorm";


@Entity()
export class Service extends BaseEntity{
    
    @Column()
    name: string;

    @Column({type:'money'})
    price: number

    @Column()
    city: string;

    @Column()
    start_time: Timestamp;


    @Column()
    end_time: Timestamp;

    @Column()
    reserved: boolean;

    @OneToMany(() => User, user => user.service)
    users: User []
    


}
