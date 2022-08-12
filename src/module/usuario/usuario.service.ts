import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import {CreateUsuarioDTO} from "./UsuarioRequest.dto"
import { UpdateUsuarioDTO } from './UsuarioRequestUpdate.dto';
import {CodeDecode} from "../../helpers/codeDecoderpassword"

@Injectable()
export class UsuarioService {
    constructor(private prisma: PrismaService){}

    async create(data: CreateUsuarioDTO){
        const codedecode = new CodeDecode()
        const userExists = await this.prisma.usuario.findFirst({
            where: {
                email: data.email
            }
        })

        if(userExists){
            throw new HttpException("Esse email já se encontra cadastrado!", HttpStatus.CONFLICT)
        }
        const hashPassword = await codedecode.encode(data.senha)
        
        return await this.prisma.usuario.create({
            data: {
                cep: data.cep,
                email: data.email,
                endereco: data.endereco,
                nome: data.nome,
                numero_casa: data.numero_casa,
                senha: hashPassword,
                telefone: data.telefone,
            }
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

    async update(id: string, data: UpdateUsuarioDTO){
        const usuarioTarget = await this.prisma.usuario.findUnique({
            where: {
                id: id
            }
        })

        if(!usuarioTarget){
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
