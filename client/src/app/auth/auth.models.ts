export interface CadastroRequest {
    email: string;
    senha: string;
}

export interface UsuarioDto {
    readonly id: string;
    readonly email: string;
}