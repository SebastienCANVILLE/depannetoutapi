import { Injectable } from '@nestjs/common';
import { BaseEntity } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService extends BaseEntity  {

  async findAll() {
    return await Service.find ();
  }

  async findOneByName(name:string) {
    return await Service.findOneBy({name : name}) ;
  }

   async create(createServiceDto: CreateServiceDto) {
    return await Service.create({...createServiceDto}).save();
  } 

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    const service = await Service.findOneBy({ id: id });
    if (service) {
      if (updateServiceDto.name) {
        service.name = updateServiceDto.name
      }
      if (updateServiceDto.price) {
        service.price = updateServiceDto.price
      }
      if (updateServiceDto.city) {
        service.city = updateServiceDto.city
      }
      if (updateServiceDto.start_time) {
        service.start_time = updateServiceDto.start_time
      }
      if (updateServiceDto.end_time) {
        service.end_time = updateServiceDto.end_time
      }
      return await service.save()
    }
    return null
  }

  async delete(id: number) {
    return await Service.delete({id});
  }

} 
 
