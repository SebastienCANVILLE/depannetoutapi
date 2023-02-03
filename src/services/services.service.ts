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
    return await Service.findOneBy({name}) ;
  }

   async create(createServiceDto: CreateServiceDto) {
    return await Service.create({...createServiceDto}).save();
  } 

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    return await Service.update(+id, updateServiceDto);
  }

  async delete(id: number, name:string) {
    return await Service.delete({id, name});
  }

} 
 
