import { PartialType } from '@nestjs/mapped-types';
import { PrimaryGeneratedColumn } from 'typeorm';
import { CreateReservationDto } from './create-reservation.dto';

export class UpdateReservationDto extends PartialType(CreateReservationDto) {
    @PrimaryGeneratedColumn()
    id: number;

}
