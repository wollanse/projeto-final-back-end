import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from './UsuarioRequest.dto';
import { UpdateUsuarioDTO } from './UsuarioRequestUpdate.dto';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    create(data: CreateUsuarioDTO): Promise<import(".prisma/client").Usuario>;
    findById(id: string): Promise<import(".prisma/client").Usuario>;
    update(id: string, data: UpdateUsuarioDTO): Promise<import(".prisma/client").Usuario>;
    delete(id: string): Promise<import(".prisma/client").Usuario>;
}
