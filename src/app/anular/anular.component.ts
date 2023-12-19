import { Component } from '@angular/core';
import { TasaInteresActiva } from '../tasainteres/tasainteresactiva';

@Component({
  selector: 'app-anular',
  // standalone: true,
  // imports: [],
  templateUrl: './anular.component.html',
  styleUrl: './anular.component.css'
})
export class AnularComponent {
  tasainteres: TasaInteresActiva;
  constructor() {
    this.tasainteres = new TasaInteresActiva(1, new Date(), new Date(), 0);
  }
}