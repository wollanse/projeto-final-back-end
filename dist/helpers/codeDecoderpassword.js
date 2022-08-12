"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeDecode = void 0;
const bcrypt_1 = require("bcrypt");
class CodeDecode {
    async encode(pass) {
        const salt = await (0, bcrypt_1.genSalt)(10);
        return await (0, bcrypt_1.hash)(pass, salt);
    }
    async decode(requestPass, userPassDb) {
        return await (0, bcrypt_1.compare)(requestPass, userPassDb);
    }
}
exports.CodeDecode = CodeDecode;
//# sourceMappingURL=codeDecoderpassword.js.map