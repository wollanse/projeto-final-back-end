import { HttpException, HttpStatus, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { UsuarioDTO } from '../usuario/Usuario.dto';
import { compareSync } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService, private jwtService: JwtService){}

  async validateUser(email: string, pass: string){
    let user: UsuarioDTO;
    try{
        user = await this.prisma.usuario.findUnique({
            where: {
                email: email
            }
        })
    } catch (err){
       throw new NotFoundException("Email e senha invalido")
    }

    const passValid = await compareSync(pass, user.senha)
    if(!passValid) return null;

    return user;
}
  
async login(email: string) {
  const usuario = await this.prisma.usuario.findUnique({
    where: {
      email: email
    }
  })

  if(!usuario) throw new HttpException("Not found", HttpStatus.NOT_FOUND)

  const payload = { sub: usuario.id, email: usuario.email };

  return {
    token: this.jwtService.sign(payload),
  };
}
}

