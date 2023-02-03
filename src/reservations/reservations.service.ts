import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';

@Injectable()
export class ReservationsService {
 
  async create(createReservationDto: CreateReservationDto) {
    return await Reservation.create({...createReservationDto}).save() ;
  }

  async findAll() {
    return await Reservation.find();
  }

  async findOne(id: number) {
    return await Reservation.findOneBy({id});
  }

  async update(id: number, updateReservationDto: UpdateReservationDto) {
     await Reservation.update(+id, updateReservationDto);
    return this.findOne(+id)
  } 

  async remove(id: number) {
    return await Reservation.delete(id);
  }
}
