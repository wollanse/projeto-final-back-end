import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';
export declare class LoginController {
    private readonly loginService;
    constructor(loginService: LoginService);
    login(data: LoginDto): Promise<any>;
}
