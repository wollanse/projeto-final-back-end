"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColetaModule = void 0;
const common_1 = require("@nestjs/common");
const coleta_service_1 = require("./coleta.service");
const coleta_controller_1 = require("./coleta.controller");
const PrismaService_1 = require("../../database/PrismaService");
const local_strategy_1 = require("../login/strategies/local.strategy");
const login_service_1 = require("../login/login.service");
const jwt_1 = require("@nestjs/jwt");
let ColetaModule = class ColetaModule {
};
ColetaModule = __decorate([
    (0, common_1.Module)({
        controllers: [coleta_controller_1.ColetaController],
        providers: [coleta_service_1.ColetaService, PrismaService_1.PrismaService, local_strategy_1.LocalStrategy, login_service_1.LoginService, jwt_1.JwtModule, jwt_1.JwtService]
    })
], ColetaModule);
exports.ColetaModule = ColetaModule;
//# sourceMappingURL=coleta.module.js.map