import { IsNotEmpty, MinLength } from "class-validator"

export class ColetaRequest {

    @IsNotEmpty()
    @MinLength(3, {
        message: "informe um nome com no minimo três caracteres"
    })
    nome: string

    @IsNotEmpty()
    @MinLength(5, {message: "Dê mais detalhes no ponto de referencia"})
    ponto_referencia: string

    @IsNotEmpty()
    @MinLength(5, {message: "Dê mais informações no campo detalhes"})
    detalhes: string

    @IsNotEmpty()
    @MinLength(0, {
        message: "Algo deu errado na requisição, tente sair e logar novamente"
    })
    usuario_id: string
}