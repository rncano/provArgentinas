import { Injectable } from '@angular/core';
import { ProvinciaModel } from '../models/provincia-model';
@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  listaProvincias: ProvinciaModel[] = [];

  constructor() {
    this.listaProvincias = [
      {
        id: "1",
        nombreProvincia: "Buenos Aires",
        nombreCapital: "La Plata",
        descripcion: "Es la provincia más poblada de Argentina y alberga la capital del país, Buenos Aires. Es conocida por sus playas, sus estancias y sus barrios históricos.",
        imagenProvincia: '.\assets\media\bsas.jpg',
        lugaresProvincia: "https://www.youtube.com/embed/uZBdCxjlDOw"
      },
      {
        id: "2",
        nombreProvincia: "Córdoba ",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        lugaresProvincia: "https://www.youtube.com/embed/FtD7hBacnTo"
      }
    ]
  }

  

  getProvincias(): ProvinciaModel[] {

    return this.listaProvincias;

  }
}
