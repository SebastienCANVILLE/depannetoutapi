
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateServiceDto {
  
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string;

    @IsNotEmpty()
    @IsOptional()
    price: number


    @IsString()
    @IsNotEmpty()
    @IsOptional()
    city: string;

    @IsDate()
    @IsNotEmpty()
    @IsOptional()
    start_time: Date;

    @IsDate()
    @IsNotEmpty()
    @IsOptional()
    end_time: Date;
}