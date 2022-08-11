import { ColetaDTO } from './Coleta.dto';
import { ColetaService } from './coleta.service';
export declare class ColetaController {
    private readonly coletaService;
    constructor(coletaService: ColetaService);
    save(data: ColetaDTO): Promise<import(".prisma/client").Coleta>;
    getById(id: string): Promise<import(".prisma/client").Coleta>;
    update(id: string, data: ColetaDTO): Promise<import(".prisma/client").Coleta>;
    delete(id: string): Promise<import(".prisma/client").Coleta>;
}
