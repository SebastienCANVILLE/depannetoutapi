import { PrimaryGeneratedColumn } from "typeorm";

export class CreateReservationDto {
    @PrimaryGeneratedColumn()
    id: number;
    

}
