//import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
import {  IsEmail,   IsNotEmpty,   IsString } from 'class-validator';
// import { IsEmail } from 'class-validator/types/decorator/decorators';

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsString()
    adress_line1: string;

    @IsString()
    adress_line2: string;

    @IsString()
    adress_line3: string;

    @IsNotEmpty()
    @IsString()
    zipCode: string;

    @IsNotEmpty()
    @IsString()
    city: string;

}