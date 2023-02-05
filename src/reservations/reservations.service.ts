import { Injectable } from '@nestjs/common';
import { BaseEntity } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService extends BaseEntity{
 
   async create(createReservationDto: CreateReservationDto) {
    return await Reservation.create({...createReservationDto}).save() ;
   
  }

  async findAll() {
    return await Reservation.find();
  }

  async findBy(id: number) {
    return await Reservation.findBy({id});
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
     await Reservation.update(+id, updateReservationDto);
    return this.findBy(+id)
  } 

  async delete(id: number) {
    const dataDeleted = await Reservation.findBy({ id });
    await Reservation.delete(id);
    if (dataDeleted) {
      return dataDeleted;
    }
    return undefined;
  }
}
