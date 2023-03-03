import { Component } from '@angular/core';
import { MensajeService } from '../mensaje.service';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent {
  constructor(public mensajeServicio: MensajeService) {}
}
