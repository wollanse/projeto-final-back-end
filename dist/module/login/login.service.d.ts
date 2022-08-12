import { PrismaService } from 'src/database/PrismaService';
import { LoginDto } from './dto/login.dto';
export declare class LoginService {
    private prisma;
    constructor(prisma: PrismaService);
    login(data: LoginDto): Promise<import(".prisma/client").Usuario>;
}
