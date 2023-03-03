import { Component } from '@angular/core';
import { Pelicula } from '../pelicula';
import { Actor } from '../actor'
import { ImdbServiceService } from '../imdb-service.service';
import { IDBService } from '../idb.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})

export class PeliculasComponent {
  peliculas: any = [];

  constructor (public servicio: ImdbServiceService, public idb: IDBService) {}

  listado() {
    let input: any = document.getElementById('buscador');
    let url: string = "https://imdb-api.com/en/API/SearchMovie/k_7y2v3bw1/" + input.value;

    this.servicio.getLista(url).subscribe(peliculas => this.peliculas = peliculas);
  }
  verActores(pelicula: Pelicula){
    let url: string = "https://imdb-api.com/en/API/SearchMovie/k_7y2v3bw1/tt3581920";

    this.servicio.getLista(url).subscribe(peliculas => this.peliculas = peliculas);
  }
  favorita(pelicula: Pelicula) {
    this.idb.existePelicula(pelicula);
  }

  limpiar() {
    this.idb.mensajes.limpiarMensajes();
  }
}