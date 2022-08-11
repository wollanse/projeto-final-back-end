import { Module } from '@nestjs/common';
import { UsuarioModule } from './module/usuario/usuario.module';
import { ColetaModule } from './module/coleta/coleta.module';

@Module({
  imports: [UsuarioModule, ColetaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
