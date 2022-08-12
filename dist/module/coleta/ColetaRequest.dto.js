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
exports.ColetaRequest = void 0;
const class_validator_1 = require("class-validator");
class ColetaRequest {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3, {
        message: "informe um nome com no minimo três caracteres"
    }),
    __metadata("design:type", String)
], ColetaRequest.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5, { message: "Dê mais detalhes no ponto de referencia" }),
    __metadata("design:type", String)
], ColetaRequest.prototype, "ponto_referencia", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5, { message: "Dê mais informações no campo detalhes" }),
    __metadata("design:type", String)
], ColetaRequest.prototype, "detalhes", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(0, {
        message: "Algo deu errado na requisição, tente sair e logar novamente"
    }),
    __metadata("design:type", String)
], ColetaRequest.prototype, "usuario_id", void 0);
exports.ColetaRequest = ColetaRequest;
//# sourceMappingURL=ColetaRequest.dto.js.map