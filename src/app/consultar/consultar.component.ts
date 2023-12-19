import { Component } from '@angular/core';
import { TasaInteresActiva } from '../tasainteres/tasainteresactiva';

@Component({
  selector: 'app-consultar',
  // standalone: true,
  // imports: [],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  tasainteres: TasaInteresActiva;
  constructor() {
    this.tasainteres = new TasaInteresActiva(1, new Date(), new Date(), 0);
  }
}