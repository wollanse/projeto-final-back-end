import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { ColetaDTO } from './Coleta.dto';

@Injectable()
export class ColetaService {
    constructor(private prisma: PrismaService){}

    async create(data: ColetaDTO){
        return await this.prisma.coleta.create({
            data: data
        })
    }

    async findById(id: string){
        const coleta =  await this.prisma.coleta.findFirst({
            where: {
                id: id
            }
        })

        if(!coleta){
            throw new HttpException("Not found", HttpStatus.NOT_FOUND)
        }

        return coleta;
    
    }

    async update(id: string, data: ColetaDTO){
        const coleta = await this.prisma.coleta.findFirst({
            where: {
                id: id
            }
        })
    
        if(!coleta){
            throw new HttpException("Coleta não encontrada na nossa base de dados", HttpStatus.NOT_FOUND)
        }

        return await this.prisma.coleta.update({
            data,
            where: {
                id,
            }
        })
    }

    async delete(id: string){
        try{
            return this.prisma.coleta.delete({
                where: {
                    id,
                }
            }).catch(err => {
                throw new HttpException("Opss!... algo deu errado", HttpStatus.BAD_REQUEST)
            })
        } catch(e){
            
        }
    }
}
