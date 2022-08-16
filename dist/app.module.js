"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const usuario_module_1 = require("./module/usuario/usuario.module");
const coleta_module_1 = require("./module/coleta/coleta.module");
const login_module_1 = require("./module/login/login.module");
const VerifyToken_1 = require("./middlewares/VerifyToken");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(VerifyToken_1.VerifyToken).forRoutes('/coleta');
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [usuario_module_1.UsuarioModule, coleta_module_1.ColetaModule, login_module_1.LoginModule],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map