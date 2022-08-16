import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Validate } from 'class-validator';
import { UsuarioDTO } from 'src/module/usuario/Usuario.dto';
import { json } from 'stream/consumers';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from './UsuarioRequest.dto';
import { UpdateUsuarioDTO } from './UsuarioRequestUpdate.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async create(@Body() data: CreateUsuarioDTO){
    return this.usuarioService.create(data)
  }

  @Get(":id")
  @UseGuards(AuthGuard("jwt"))
  async findById(@Param("id") id: string){
    return this.usuarioService.findById(id)
  }

  @Put(":id")
  @UseGuards(AuthGuard("jwt"))
  @UsePipes(ValidationPipe)
  async update(@Param("id") id:string, @Body() data:UpdateUsuarioDTO){
    return this.usuarioService.update(id, data)
  }

  @Delete(":id")
  @UseGuards(AuthGuard("jwt"))
  async delete(@Param("id") id:string){
    return this.usuarioService.delete(id)
  }
}
