import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CriarContatoComponent} from "./criar-contato.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [CriarContatoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CriarContatoModule { }
