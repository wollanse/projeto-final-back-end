import { Module } from '@nestjs/common';
import { ColetaService } from './coleta.service';
import { ColetaController } from './coleta.controller';
import { PrismaService } from 'src/database/PrismaService';
import { LocalStrategy } from '../login/strategies/local.strategy';
import { LoginService } from '../login/login.service';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ColetaController],
  providers: [ColetaService, PrismaService, LocalStrategy, LoginService, JwtModule, JwtService]
})
export class ColetaModule {}
