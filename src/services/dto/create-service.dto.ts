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

    @IsDate()
    @IsNotEmpty()
    start_time: Date;

    @IsDate()
    @IsNotEmpty()
    end_time: Date;
}


