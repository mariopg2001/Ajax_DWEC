import { Component } from '@angular/core';
import { IDBService } from '../idb.service';
import { Pelicula } from '../pelicula';

@Component({
  selector: 'app-favoritas',
  templateUrl: './favoritas.component.html',
  styleUrls: ['./favoritas.component.css']
})
export class FavoritasComponent {
  favoritas:Pelicula[] = [];

  constructor (public servicioIDB: IDBService) {
    this.servicioIDB.registrar(this.cargar.bind(this))
  }

  cargar() {
    this.favoritas = this.servicioIDB.getListado();
  }

  limpiar() {
    this.servicioIDB.mensajes.limpiarMensajes();
  }
}
