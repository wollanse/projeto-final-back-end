import { Module } from '@nestjs/common';
import { ColetaService } from './coleta.service';
import { ColetaController } from './coleta.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ColetaController],
  providers: [ColetaService, PrismaService]
})
export class ColetaModule {}
