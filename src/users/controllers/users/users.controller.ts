import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { Userdetails } from '../dtos/userDetail';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { Username: 'Aki', email: 'ruzwan' };
  }
  @Get('posts')
  getUserPost() {
    return [
      {
        id: 1,
        title: 'My first post',
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  postUser(@Body() userData: Userdetails) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getPostById(@Param('id' , ParseIntPipe)  id:string){
  console.log(id, "the id ")
  return{}
  }
}
