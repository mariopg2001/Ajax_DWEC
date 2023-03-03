import { Injectable } from '@angular/core';
import { MensajeService } from './mensaje.service';
import { Pelicula } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class IDBService {
  private db!: IDBDatabase;
  private callbacks:Function[] = [];
  public listadoFavoritas: Pelicula[] = [];

  constructor(public mensajes: MensajeService) {}

  registrar(callback:Function) {
    this.callbacks.push(callback);
  }

  getListado() {
    this.mensajes.insertarMensaje('Info', 'Cargado el listado de películas favoritas.', 'info');
    return this.listadoFavoritas;
  }

  avisar() {
    for(let callback of this.callbacks) {
      callback();
    }
  }

  iniciarIndexedDB() {
    const peticion = indexedDB.open('PeliculasDB');

    peticion.onsuccess = () => {
      this.db = peticion.result;
      this.cargarPeliculas();
    }

    peticion.onupgradeneeded = () => {
      this.db = peticion.result;
      this.db.createObjectStore('favoritas', { keyPath: 'id' });
    }

    peticion.onerror = (err) => {
      console.error(`Error de IndexedDB: ${peticion.error} ` + err);
      this.mensajes.insertarMensaje('Error', 'Error de IndexedDB al hacer conexión', 'error');
    }
  }
  verActor(){
    
   console.log('ver actores')
  }

  existePelicula(pelicula: Pelicula) {
    let existe = false;
    const peticion = this.db.transaction('favoritas', 'readonly').objectStore('favoritas').getAll();
    
    peticion.onsuccess = () => {
      const listaPeliculas:Pelicula[] = peticion.result;
      
      for(let peli of listaPeliculas) {
        if(peli.id === pelicula.id) {
          this.mensajes.insertarMensaje('Aviso', 'La película a insertar ya existe en favoritos', 'aviso');
          existe = true;
          break;
        }
      }

      if(!existe) {
        this.insercion(pelicula);
      }
    }
  }

  insercion(pelicula: Pelicula) {
    const peticion = this.db.transaction('favoritas', 'readwrite').objectStore('favoritas').add(pelicula);
    
    peticion.onsuccess = () => {
      console.info('Película añadida a IDB');
      this.mensajes.insertarMensaje('Éxito', 'Película añadida a favoritos', 'exito');
      this.cargarPeliculas();
    }

    peticion.onerror = () => {
      this.mensajes.insertarMensaje('Error', 'No pudo ser insertada la película a favoritos.', 'error');
    }
  }

  cargarPeliculas() {
    const peticion = this.db.transaction('favoritas', 'readonly')
      .objectStore('favoritas')
      .getAll();
    
    peticion.onsuccess = () => {
      this.mensajes.insertarMensaje('Info', 'Listado local de películas actualizado.', 'info');
      this.listadoFavoritas = peticion.result;
      this.avisar();
    } 

    peticion.onerror = () => {
      this.mensajes.insertarMensaje('Error', 'No pudo ser cargado el listado local de películas.', 'error');
    }
  }
}
