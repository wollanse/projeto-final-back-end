import { PrismaService } from 'src/database/PrismaService';
import { UsuarioDTO } from '../usuario/Usuario.dto';
import { JwtService } from '@nestjs/jwt';
export declare class LoginService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<UsuarioDTO>;
    login(email: string): Promise<{
        token: string;
    }>;
}
