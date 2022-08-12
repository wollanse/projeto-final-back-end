import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() data: LoginDto){
   try{
    return await this.loginService.login(data)
   } catch(err){
    return err
   }
  }
  
}
