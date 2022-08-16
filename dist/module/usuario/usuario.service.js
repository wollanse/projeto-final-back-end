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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/PrismaService");
const codeDecoderpassword_1 = require("../../helpers/codeDecoderpassword");
let UsuarioService = class UsuarioService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const codedecode = new codeDecoderpassword_1.CodeDecode();
        const userExists = await this.prisma.usuario.findFirst({
            where: {
                email: data.email
            }
        });
        if (userExists) {
            throw new common_1.HttpException("Esse email já se encontra cadastrado!", common_1.HttpStatus.CONFLICT);
        }
        const hashPassword = await codedecode.encode(data.senha);
        return await this.prisma.usuario.create({
            data: {
                cep: data.cep,
                email: data.email,
                endereco: data.endereco,
                nome: data.nome,
                numero_casa: data.numero_casa,
                senha: hashPassword,
                telefone: data.telefone,
            }
        });
    }
    async findByEmail(email) {
        const usuario = await this.prisma.usuario.findUnique({
            where: {
                id: email
            }
        });
        if (!usuario) {
            throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
        }
        return usuario;
    }
    async findById(id) {
        const usuario = await this.prisma.usuario.findFirst({
            where: {
                id: id
            }
        });
        if (!usuario) {
            throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
        }
        return usuario;
    }
    async update(id, data) {
        const usuarioTarget = await this.prisma.usuario.findUnique({
            where: {
                id: id
            }
        });
        if (!usuarioTarget) {
            throw new common_1.HttpException("Usuario não encontrado na nossa base de dados", common_1.HttpStatus.NOT_FOUND);
        }
        return await this.prisma.usuario.update({
            data,
            where: {
                id,
            }
        });
    }
    async delete(id) {
        try {
            return this.prisma.usuario.delete({
                where: {
                    id,
                }
            }).catch(err => {
                throw new common_1.HttpException("Opss!... algo deu errado", common_1.HttpStatus.BAD_REQUEST);
            });
        }
        catch (err) {
            console.log(err.data.message);
        }
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map