import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { URL_API } from './auth.tokens';
import { Router } from '@angular/router';
import { Cadastro } from './cadastro/cadastro';
import { CadastroRequest } from './auth.models';

@Service()
export class AuthService {
    private readonly http = inject(HttpClient);
    private readonly router = inject(Router);

    private readonly urlApi = inject(URL_API);

    cadastrar(req: CadastroRequest) {
        return this.http.post(`${this.urlApi}/Usuario/cadastro`, req);
    }
}
