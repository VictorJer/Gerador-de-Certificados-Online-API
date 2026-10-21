import { afterNextRender, Component, ElementRef, model, signal, viewChild } from '@angular/core';
import { PaginaAutenticacao } from '../autenticacao/autenticacao';
import { RouterLink } from '@angular/router';
import { FormField, email, form, minLength, pattern, required } from '@angular/forms/signals';
import { LucideArrowRight } from '@lucide/angular';
import { CadastroRequest } from '../auth.models';

interface CadastroFormModel{
  readonly email: string;
  readonly senha: string;
}

@Component({
  imports: [LucideArrowRight, PaginaAutenticacao, FormField, RouterLink],
  selector: 'app-cadastro',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  private readonly tituloPagina = viewChild<ElementRef<HTMLHeadElement>>('tituloPagina')

  protected readonly modeloFormulario = signal<CadastroFormModel>({ email: '', senha: ''});
  protected readonly formularioCadastro = form(this.modeloFormulario, (modelo) =>{
    required(modelo.email, { message: 'Informe seu email.' });
    email(modelo.email, { message: 'Informe um email válido.' });
    required(modelo.senha, { message: 'Informe uma senha.' });
    minLength(modelo.senha, 8, { message: 'A senha precisa ter 8 caracteres.' });
    pattern(modelo.senha, /(?=.*\d)(?=.*[a-zA-Z0-9]).+/,{
      message: 'Inclua pelo menos um número e um caracter especial'
    });
  });

  constructor() {
    afterNextRender(() => this.tituloPagina()?.nativeElement.focus());
  }

  enviarFormulario(event: SubmitEvent){
    event.preventDefault();

    if (this.formularioCadastro().invalid()) {
      console.log(this.formularioCadastro().errorSummary());
      return;
    }

    const request: CadastroRequest = {
      email: this.modeloFormulario().email,
      senha: this.modeloFormulario().email,
    }
  }
}
