import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { CreateServiceDto } from './create-service.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    price: number


    @IsString()
    @IsNotEmpty()
    city: string;

    @IsDate()
    @IsNotEmpty()
    start_time: Date;

    @IsDate()
    @IsNotEmpty()
    end_time: Date;
}