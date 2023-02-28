import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {ContatosComponent} from "./contatos/contatos.component";
import {CriarContatoComponent} from "./criar-contato/criar-contato.component";

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'contato', component: ContatosComponent},
  {path: 'criar', component: CriarContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
