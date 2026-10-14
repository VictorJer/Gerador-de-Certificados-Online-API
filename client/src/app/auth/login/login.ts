import { Component } from '@angular/core';
import { PaginaAutenticacao } from '../autenticacao/autenticacao';
import { RouterLink } from '@angular/router';

@Component({
  imports: [PaginaAutenticacao, RouterLink],
  selector: 'app-cadastro',
  templateUrl: './login.html',
})
export class Login {}
