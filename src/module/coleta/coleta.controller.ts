import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ColetaDTO } from './Coleta.dto';
import { ColetaService } from './coleta.service';
import { ColetaRequest } from './ColetaRequest.dto';

@Controller('coleta')
@UseGuards(AuthGuard("local"))
export class ColetaController {
  constructor(private readonly coletaService: ColetaService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async save(@Body() data:ColetaRequest){
    return this.coletaService.create(data)
  }

  @Get(":id")
  async getById(@Param("id") id:string){
    return this.coletaService.findById(id)
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: ColetaDTO){
    return this.coletaService.update(id, data)
  }

  @Delete(":id")
  async delete(@Param("id") id:string){
    return this.coletaService.delete(id)
  }
}
