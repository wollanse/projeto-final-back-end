import { NestMiddleware } from "@nestjs/common";
export declare class VerifyToken implements NestMiddleware {
    use(req: any, res: any, next: any): void;
}
