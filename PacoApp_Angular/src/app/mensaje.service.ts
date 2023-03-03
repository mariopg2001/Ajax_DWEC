import { Injectable } from '@angular/core';
import { Mensaje } from './mensaje';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: Mensaje[] = [];

  insertarMensaje(titulo: string, descripcion: string, tipo: 'info' | 'exito' | 'aviso' | 'error') {
    this.mensajes.push({titulo, descripcion, tipo});
  }

  limpiarMensajes() {
    this.mensajes = [];
  }
}
