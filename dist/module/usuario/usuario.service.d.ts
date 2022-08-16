import { PrismaService } from '../../database/PrismaService';
import { CreateUsuarioDTO } from "./UsuarioRequest.dto";
import { UpdateUsuarioDTO } from './UsuarioRequestUpdate.dto';
export declare class UsuarioService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateUsuarioDTO): Promise<import(".prisma/client").Usuario>;
    findByEmail(email: string): Promise<import(".prisma/client").Usuario>;
    findById(id: string): Promise<import(".prisma/client").Usuario>;
    update(id: string, data: UpdateUsuarioDTO): Promise<import(".prisma/client").Usuario>;
    delete(id: string): Promise<import(".prisma/client").Usuario>;
}
