import { PrismaService } from '../../database/PrismaService';
import { UsuarioDTO } from './Usuario.dto';
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: UsuarioDTO): Promise<import(".prisma/client").Usuario>;
    findById(id: string): Promise<import(".prisma/client").Usuario>;
    update(id: string, data: UsuarioDTO): Promise<import(".prisma/client").Usuario>;
    delete(id: string): Promise<import(".prisma/client").Usuario>;
}
