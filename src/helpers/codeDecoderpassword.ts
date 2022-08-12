import {compare, genSalt, hash} from "bcrypt"

export class CodeDecode {
    async encode(pass: string){
        const salt = await genSalt(10)
        return await hash(pass, salt)
    }

    async decode(requestPass: string, userPassDb: string){
        return await compare(requestPass, userPassDb)
    }
}