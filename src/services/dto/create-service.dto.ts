import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString } from "class-validator";

export class CreateServiceDto {

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

   
    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    start_time: Date;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    end_time: Date;

   /*  @IsNotEmpty()
    reserved: boolean */
}


