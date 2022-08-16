import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  
  
  @Post()
  async login(@Body() data: LoginDto){
    Logger.log("Login controller")
    return this.loginService.login(data.email)
  }
  
}
