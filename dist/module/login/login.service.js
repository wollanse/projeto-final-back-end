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
const codeDecoderpassword_1 = require("../../helpers/codeDecoderpassword");
let LoginService = class LoginService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async login(data) {
        const codeDecode = new codeDecoderpassword_1.CodeDecode();
        const user = await this.prisma.usuario.findFirst({
            where: {
                email: data.email,
            }
        });
        const compare = await codeDecode.decode(data.senha, user.senha);
        if (compare) {
            return user;
        }
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map