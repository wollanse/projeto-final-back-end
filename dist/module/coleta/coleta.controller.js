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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColetaController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const Coleta_dto_1 = require("./Coleta.dto");
const coleta_service_1 = require("./coleta.service");
const ColetaRequest_dto_1 = require("./ColetaRequest.dto");
let ColetaController = class ColetaController {
    constructor(coletaService) {
        this.coletaService = coletaService;
    }
    async save(data) {
        return this.coletaService.create(data);
    }
    async getById(id) {
        return this.coletaService.findById(id);
    }
    async update(id, data) {
        return this.coletaService.update(id, data);
    }
    async delete(id) {
        return this.coletaService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ColetaRequest_dto_1.ColetaRequest]),
    __metadata("design:returntype", Promise)
], ColetaController.prototype, "save", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColetaController.prototype, "getById", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Coleta_dto_1.ColetaDTO]),
    __metadata("design:returntype", Promise)
], ColetaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColetaController.prototype, "delete", null);
ColetaController = __decorate([
    (0, common_1.Controller)('coleta'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)("local")),
    __metadata("design:paramtypes", [coleta_service_1.ColetaService])
], ColetaController);
exports.ColetaController = ColetaController;
//# sourceMappingURL=coleta.controller.js.map