import {ConflictException, Controller, Get, Post, Body, Param, Patch, Delete, NotFoundException, UseGuards, Request, } from '@nestjs/common';

import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createServiceDto: CreateServiceDto, @Request()req) {
    console.log(req.user);

    return this.servicesService.create(createServiceDto);
  
  }

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':name')
  async findBy(@Param('name') name: string) {
    console.log(name);
    
    return await this.servicesService.findBy(name);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    const service = await this.servicesService.update(+id, updateServiceDto);
    if (!service) {
      throw new NotFoundException(`cet id n'existe pas`);
    }
    return service;
  }


  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    
    const service = await this.servicesService.delete(+id)
    if (!service) {
      throw new NotFoundException(`cet id n'existe pas`);
    }
    return await this.servicesService.delete(+id)
  }
}


