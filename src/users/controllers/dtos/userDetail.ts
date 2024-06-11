import { IsEmail, IsNotEmpty } from 'class-validator';

export class Userdetails{
    @IsNotEmpty()
    username:string;
    email:string;
}