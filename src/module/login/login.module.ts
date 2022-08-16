import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { PrismaService } from 'src/database/PrismaService';
import { UsuarioModule } from '../usuario/usuario.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      privateKey: process.env.SECRET,
      signOptions: {expiresIn: "240s"}
    })
  ],
  controllers: [LoginController],
  providers: [LoginService, PrismaService, LocalStrategy, JwtStrategy],
})
export class LoginModule {}
