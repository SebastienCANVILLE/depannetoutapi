import { Service } from 'src/services/entities/service.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, ManyToOne,  } from 'typeorm';


@Entity()
export class Reservation extends BaseEntity { 

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(()=>Service, service => service.reservations,{onDelete:'CASCADE'})
    reservations: Reservation[]
    
    @ManyToOne(() => User, user => user.reservations, { onDelete: 'CASCADE' })
    users: User;
    
}
