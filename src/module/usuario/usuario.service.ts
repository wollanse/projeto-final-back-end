import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { UsuarioDTO } from './Usuario.dto';

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService){}

    async create(data: UsuarioDTO){
        const userExists = await this.prisma.usuario.findFirst({
            where: {
                email: data.email
            }
        })

        if(userExists){
            throw new HttpException("Esse email já se encontra cadastrado!", HttpStatus.CONFLICT)
        }

        return await this.prisma.usuario.create({
            data: data
        })
    }

    async findById(id: string){
        const usuario =  await this.prisma.usuario.findFirst({
            where: {
                id: id
            }
        })

        if(!usuario){
            throw new HttpException("Not found", HttpStatus.NOT_FOUND)
        }

        return usuario;
    
    }

    async update(id: string, data: UsuarioDTO){
        const usuario = await this.prisma.usuario.findUnique({
            where: {
                id: id
            }
        })

        if(!usuario){
            throw new HttpException("Usuario não encontrado na nossa base de dados", HttpStatus.NOT_FOUND)
        }

        return await this.prisma.usuario.update({
            data,
            where: {
                id,
            }
        })
    }

    async delete(id: string){
        try{
            return this.prisma.usuario.delete({
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
