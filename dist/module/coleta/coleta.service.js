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
exports.ColetaService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/PrismaService");
let ColetaService = class ColetaService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return await this.prisma.coleta.create({
            data: data
        });
    }
    async findById(id) {
        const coleta = await this.prisma.coleta.findFirst({
            where: {
                id: id
            }
        });
        if (!coleta) {
            throw new common_1.HttpException("Not found", common_1.HttpStatus.NOT_FOUND);
        }
        return coleta;
    }
    async update(id, data) {
        const coleta = await this.prisma.coleta.findFirst({
            where: {
                id: id
            }
        });
        if (!coleta) {
            throw new common_1.HttpException("Coleta não encontrada na nossa base de dados", common_1.HttpStatus.NOT_FOUND);
        }
        return await this.prisma.coleta.update({
            data,
            where: {
                id,
            }
        });
    }
    async delete(id) {
        try {
            return this.prisma.coleta.delete({
                where: {
                    id,
                }
            }).catch(err => {
                throw new common_1.HttpException("Opss!... algo deu errado", common_1.HttpStatus.BAD_REQUEST);
            });
        }
        catch (e) {
        }
    }
};
ColetaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ColetaService);
exports.ColetaService = ColetaService;
//# sourceMappingURL=coleta.service.js.map