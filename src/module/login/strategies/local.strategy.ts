import { Injectable, NotFoundException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { LoginService } from "../login.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private loginService: LoginService){
        super({username: "email"})
    }

    async validate(email: string, senha: string){
        return await this.loginService.validateUser(email, senha);


    }
}