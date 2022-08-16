import { HttpException, HttpStatus, Injectable, Logger, NestMiddleware } from "@nestjs/common"

@Injectable()
export class VerifyToken implements NestMiddleware{
    use(req: any, res: any, next){
        Logger.log("Entrada VerifyToken")
        const token = req.headers.token
        
        Logger.log(token)

        if(!token){
            throw new HttpException("Token de autenticação não extiste", HttpStatus.UNAUTHORIZED)
        }

        console.log(token);
        next()
    }
}