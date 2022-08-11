import { PrismaService } from 'src/database/PrismaService';
import { ColetaDTO } from './Coleta.dto';
export declare class ColetaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: ColetaDTO): Promise<import(".prisma/client").Coleta>;
    findById(id: string): Promise<import(".prisma/client").Coleta>;
    update(id: string, data: ColetaDTO): Promise<import(".prisma/client").Coleta>;
    delete(id: string): Promise<import(".prisma/client").Coleta>;
}
