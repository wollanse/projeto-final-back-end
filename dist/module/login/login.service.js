"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/PrismaService");
const bcrypt_1 = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const codeDecoderpassword_1 = require("../../helpers/codeDecoderpassword");
let LoginService = class LoginService {
    constructor(prisma, jwtService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        let user;
        try {
            user = await this.prisma.usuario.findUnique({
                where: {
                    email: email
                }
            });
        }
        catch (err) {
            throw new common_1.NotFoundException("Email e senha invalido");
        }
        const passValid = await (0, bcrypt_1.compareSync)(pass, user.senha);
        if (!passValid)
            return null;
        return user;
    }
    async login(email, senha) {
        const codecode = new codeDecoderpassword_1.CodeDecode();
        const usuario = await this.prisma.usuario.findUnique({
            where: {
                email: email
            }
        });
        if (!usuario)
            throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
        const verify = await codecode.decode(senha, usuario.senha);
        if (verify) {
            const payload = { sub: usuario.id, email: usuario.email };
            return {
                token: this.jwtService.sign(payload),
            };
        }
        throw new common_1.HttpException("login ou senha invalido", common_1.HttpStatus.BAD_REQUEST);
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService, jwt_1.JwtService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map