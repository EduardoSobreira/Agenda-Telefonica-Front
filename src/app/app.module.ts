import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ContatosComponent } from './contatos/contatos.component';
import {CriarContatoModule} from "./criar-contato/criar-contato.module";



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContatosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CriarContatoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
