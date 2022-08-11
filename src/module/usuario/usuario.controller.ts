import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { UsuarioDTO } from 'src/module/usuario/Usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() data: UsuarioDTO){
    return this.usuarioService.create(data)
  }

  @Get(":id")
  async findById(@Param("id") id: string){
    return this.usuarioService.findById(id)
  }

  @Put(":id")
  async update(@Param("id") id:string, @Body() data:UsuarioDTO){
    return this.usuarioService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id:string){
    return this.usuarioService.delete(id)
  }
}
