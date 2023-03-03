import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeliculasComponent } from './peliculas/peliculas.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { CreditosComponent } from './creditos/creditos.component';
import { FavoritasComponent } from './favoritas/favoritas.component';
import { RepartoComponent } from './reparto/reparto.component';

const rutas: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'creditos', component: CreditosComponent },
  { path: 'favoritas', component: FavoritasComponent },
  { path: 'reparto', component: RepartoComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(rutas) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
