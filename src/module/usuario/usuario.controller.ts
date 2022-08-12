import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Validate } from 'class-validator';
import { UsuarioDTO } from 'src/module/usuario/Usuario.dto';
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
  async findById(@Param("id") id: string){
    return this.usuarioService.findById(id)
  }

  @Put(":id")
  @UsePipes(ValidationPipe)
  async update(@Param("id") id:string, @Body() data:UpdateUsuarioDTO){
    return this.usuarioService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id:string){
    return this.usuarioService.delete(id)
  }
}
