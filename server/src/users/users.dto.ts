/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength, IsNumber } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;  

  @IsNotEmpty()
  @MinLength(10)
  mobilenumber: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}