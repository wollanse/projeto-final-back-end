import { UsuarioDTO } from 'src/module/usuario/Usuario.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(data: UsuarioDTO): Promise<import(".prisma/client").Usuario>;
    findById(id: string): Promise<import(".prisma/client").Usuario>;
    update(id: string, data: UsuarioDTO): Promise<import(".prisma/client").Usuario>;
    delete(id: string): Promise<import(".prisma/client").Usuario>;
}
