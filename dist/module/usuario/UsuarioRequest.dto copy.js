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
exports.CreateUsuarioDTO = void 0;
const class_validator_1 = require("class-validator");
const Usuario_dto_1 = require("./Usuario.dto");
class CreateUsuarioDTO extends Usuario_dto_1.UsuarioDTO {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3, {
        message: "Nome deve conter no minimo três letras"
    }),
    __metadata("design:type", String)
], CreateUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8, {
        message: "Senha deve conter no minimo 8 digitos"
    }),
    (0, class_validator_1.Matches)(/((?=.\d)|(?=.\W+))(?![.\n])(?=.[A-Z])(?=.[a-z]).*$/, {
        message: 'Senha muito fraca',
    }),
    __metadata("design:type", String)
], CreateUsuarioDTO.prototype, "senha", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUsuarioDTO.prototype, "endereco", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8, {
        message: "CEP Muito curto, insira um cep valido com 8 digitos ex: 00000-000"
    }),
    __metadata("design:type", String)
], CreateUsuarioDTO.prototype, "cep", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2, {
        message: "Numero da casa invalido, caso sua casa não tenha numero digite: 00"
    }),
    __metadata("design:type", String)
], CreateUsuarioDTO.prototype, "numero_casa", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(9, {
        message: "Numero de telefone muito curto"
    }),
    (0, class_validator_1.MaxLength)(9, {
        message: "Numero de telefone muito longo"
    }),
    __metadata("design:type", String)
], CreateUsuarioDTO.prototype, "telefone", void 0);
exports.CreateUsuarioDTO = CreateUsuarioDTO;
//# sourceMappingURL=UsuarioRequest.dto%20copy.js.map