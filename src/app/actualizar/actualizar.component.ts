import { Component } from '@angular/core';
import { TasaInteresActiva } from '../tasainteres/tasainteresactiva';

@Component({
  selector: 'app-actualizar',
  // standalone: true,
  // imports: [],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {
  tasainteres: TasaInteresActiva;
  constructor() {
    this.tasainteres = new TasaInteresActiva(1, new Date(), new Date(), 0);
  }
}
