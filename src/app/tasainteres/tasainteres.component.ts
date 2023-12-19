import { Component } from '@angular/core';
import { TasaInteresActiva } from './tasainteresactiva';

@Component({
  selector: 'app-tasainteres',
  // standalone: true,
  // imports: [],
  templateUrl: './tasainteres.component.html',
  styleUrl: './tasainteres.component.css'
})
export class TasainteresComponent {
  tasainteres: TasaInteresActiva;

  constructor() {
    this.tasainteres = new TasaInteresActiva(1, new Date(), new Date(), 0);
}
}
