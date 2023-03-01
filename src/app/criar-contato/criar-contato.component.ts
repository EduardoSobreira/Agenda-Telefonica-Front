import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.scss']
})
export class CriarContatoComponent implements OnInit {

  @Input()
  formulario: any;

  @Output()
  public emitter = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit(): void {

  }

  enviar() {
    if (this.formulario.get('telefone')?.invalid) { // TODO: Exemplos de validações
      console.log("tem erro no campo telefone");
    }

    if (this.formulario.get('nomw')?.invalid) {
      console.log("tem erro no campo nomw")
    }

    this.emitter.emit(true);

    // TODO: atributo do campo formulario que devolve se o formulario está invalido. ler sobre Validators do Reactive Forms */
  }
}
