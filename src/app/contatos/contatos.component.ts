import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  formulario = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl('')
  });

  listaDeContatos: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  aoEnviar($event: any) {
    const objeto = this.formulario.value;
    // TODO chamada para salvar o numero no backend
    //  TODO  fazer o retorno do subscribe pra quando salvar com sucesso
    // TODO: Se salvou com sucesso, ce vai buscar todos os contatos do banco ( vai fazer outra requisicao no backend )
    // TODO pegar o retorno da segunda requisicao e inserir no array "this.listaDeContatos = data;
    this.listaDeContatos.push(objeto);
    this.formulario.reset();
  }
}
