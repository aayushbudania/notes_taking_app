/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

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

export class UserDto {
    @IsNotEmpty() id: number;
    @IsNotEmpty() username: string;
    @IsNotEmpty() @IsEmail() email: string;
}

export class LoginUserDto {  
    @IsNotEmpty()  readonly username: string;
    @IsNotEmpty()  readonly password: string;
}
