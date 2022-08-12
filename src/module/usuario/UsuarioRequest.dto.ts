import { IsEmail,  IsNotEmpty, IsNumberString, IsString, Matches, MaxLength, MinLength } from "class-validator";
import {UsuarioDTO} from "./Usuario.dto"

export class CreateUsuarioDTO extends UsuarioDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
        message: "Nome deve conter no minimo três letras"
    })
    nome: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @MinLength(8, {
        message: "Senha deve conter no minimo 8 digitos"
    })
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'Senha muito fraca',
    })
    senha: string

    @IsNotEmpty()
    @MinLength(5, {
        message: "Forneça mais detalhes no endereço"
    })
    endereco: string
    
    @IsNotEmpty()
    @MinLength(8, {
        message: "CEP Muito curto, insira um cep valido com 8 digitos ex: 00000000"
    })
    @IsNumberString()
    cep: string

    @IsNotEmpty()
    @MinLength(2, {
        message: "Numero da casa invalido, caso sua casa não tenha numero digite: 00"
    })
    numero_casa: string
    
    @IsNotEmpty()
    @IsString()
    @MinLength(9, {
        message: "Numero de telefone muito curto"
    })
    @MaxLength(12, {
        message: "Numero de telefone muito longo"
    })
    telefone: string
}

function ApiModelProperty(arg0: { description: string; required: boolean; type: string; }) {
    throw new Error("Function not implemented.");
}
