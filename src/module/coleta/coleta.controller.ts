import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ColetaDTO } from './Coleta.dto';
import { ColetaService } from './coleta.service';

@Controller('coleta')
export class ColetaController {
  constructor(private readonly coletaService: ColetaService) {}

  @Post()
  async save(@Body() data:ColetaDTO){
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
