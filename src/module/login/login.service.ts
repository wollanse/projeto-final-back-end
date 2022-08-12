import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { use } from 'passport';
import { PrismaService } from 'src/database/PrismaService';
import { CodeDecode } from 'src/helpers/codeDecoderpassword';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class LoginService {
  constructor(private prisma: PrismaService){}
  
  async login(data: LoginDto){
  const codeDecode = new CodeDecode()

    const user = await this.prisma.usuario.findFirst({
      where: {
        email: data.email,
      }
    })

    const compare = await codeDecode.decode(data.senha, user.senha)

    if(compare){
      return user
    }
  }
}
