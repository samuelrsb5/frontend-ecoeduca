import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HistoriasEcoComponent } from './historias-eco/historias-eco.component';
import { MapaEcoComponent } from './mapa-eco/mapa-eco.component';
import { ReciclagemEcoComponent } from './reciclagem-eco/reciclagem-eco.component';
import { DesafiosEcoComponent } from './desafios-eco/desafios-eco.component';
import {TelaCadastroComponent} from './tela-cadastro/tela-cadastro.component';

const routes: Routes = [
  { path: '', component: HomePageComponent}, // Rota inicial (cadastro)
  { path: 'login', component: TelaCadastroComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'histórias', component: HistoriasEcoComponent},
  { path: 'mapa', component: MapaEcoComponent},
  { path: 'reciclagem', component: ReciclagemEcoComponent },
  { path: 'desafios', component: DesafiosEcoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

