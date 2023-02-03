import { Controller, Get, Post, Body, Param, Patch, Delete,  } from '@nestjs/common';

import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

 @Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    
    return this.servicesService.findOneByName(name);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    const service = await this.servicesService.update(+id, updateServiceDto);
    if (!service) {
      return "pas d'id correspondant"
      //throw new 
    }
    return service;
  }

  @Delete(':id')
 async remove(@Param('id') id: string) {
    return await this.servicesService.delete(+id)
  } 
} 


