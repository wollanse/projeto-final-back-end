import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsuarioModule } from './module/usuario/usuario.module';
import { ColetaModule } from './module/coleta/coleta.module';
import { LoginModule } from './module/login/login.module';
import { VerifyToken } from './middlewares/VerifyToken';

@Module({
  imports: [UsuarioModule, ColetaModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(VerifyToken).forRoutes('/coleta')
  }
}
