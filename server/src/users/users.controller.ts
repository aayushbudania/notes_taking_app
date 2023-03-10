/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
    import { CreateUserDto } from './users.dto';
    import { UsersService } from './users.service';
    
    @Controller('users')
    export class UsersController {
      constructor(private readonly userService: UsersService) {}
      
      @Get()
      getUsers() {
        return this.userService.getUsers();
      }
      
      @Get(':id')
      findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
      }
      
      @Post()
      @UsePipes(ValidationPipe)
      createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
      }
    }