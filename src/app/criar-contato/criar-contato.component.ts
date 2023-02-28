  import { Component, OnInit } from '@angular/core';
  import {FormBuilder, FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-criar-contato',
  templateUrl: './criar-contato.component.html',
  styleUrls: ['./criar-contato.component.scss']
})
export class CriarContatoComponent implements OnInit {

    formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {

    this.formulario = this.formBuilder.group({
      nome: [null],
      telefone: [null]
    })
  }

  ngOnInit(): void {



  }

}
