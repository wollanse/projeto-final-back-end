import { Module } from '@nestjs/common';
import { UsuarioModule } from './module/usuario/usuario.module';
import { ColetaModule } from './module/coleta/coleta.module';
import { LoginModule } from './module/login/login.module';

@Module({
  imports: [UsuarioModule, ColetaModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
