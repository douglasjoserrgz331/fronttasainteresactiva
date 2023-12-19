import { Component } from '@angular/core';
import { TasaInteresActiva } from '../tasainteres/tasainteresactiva';

@Component({
  selector: 'app-incluir',
  // standalone: true,
  // imports: [],
  templateUrl: './incluir.component.html',
  styleUrl: './incluir.component.css'
})
export class IncluirComponent {
  tasainteres: TasaInteresActiva;
  constructor() {
    this.tasainteres = new TasaInteresActiva(1, new Date(), new Date(), 0);
  }
}