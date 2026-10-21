import { afterEveryRender, Component, ElementRef, signal, viewChild } from '@angular/core';
import { PaginaAutenticacao } from '../autenticacao/autenticacao';
import { RouterLink } from '@angular/router';
import { FormField, form } from '@angular/forms/signals';
import { LucideArrowRight } from '@lucide/angular';

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
  protected readonly formularioCadastro = form(this.modeloFormulario);

  constructor() {
    afterEveryRender(() => this.tituloPagina()?.nativeElement.focus());
  }

  enviarFormulario(event: SubmitEvent){
    event.preventDefault();

    const valorFormulario = this.modeloFormulario();

    console.log(valorFormulario);
  }
}
