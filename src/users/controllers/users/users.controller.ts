import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { Userdetails } from '../dtos/userDetail';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
return {Username:"Aki" , email:"ruzwan"};
    }
@Get("posts")
getUserPost(){
    return[{
    id:1,
    title:"My first post",
}]
}

@Post()
postUser(@Body() userData:Userdetails){
    console.log(request.body)
   response.send( "User created successfully")
}
}