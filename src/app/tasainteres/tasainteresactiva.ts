export class TasaInteresActiva {
    id: number;
    fecha_inicio: Date;
    fecha_fin: Date;
    valor_tasa: number;
  
    constructor(id: number, fecha_inicio: Date, fecha_fin: Date, valor_tasa: number) {
      this.id = id;
      this.fecha_inicio = fecha_inicio;
      this.fecha_fin = fecha_fin;
      this.valor_tasa = valor_tasa;
    }
  }