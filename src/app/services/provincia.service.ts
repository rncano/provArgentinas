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
        videoProvincia: "https://www.youtube.com/embed/uZBdCxjlDOw",
        region:"Centro"         
      },
      {
        id: "2",
        nombreProvincia: "Córdoba ",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      },
      {
        id: "3",
        nombreProvincia: "Santa Fé",
        nombreCapital: "Santa Fé",
        descripcion: "Esta provincia se encuentra en el norte de Argentina, y es la segunda más poblada del país. Cuenta con una amplia variedad de paisajes, desde las playas del río Paraná hasta las llanuras del oeste de la provincia.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      },
      {
        id: "4",
        nombreProvincia: "Córdoba",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      },
      {
        id: "5",
        nombreProvincia: "Córdoba ",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      },
      {
        id: "6",
        nombreProvincia: "Córdoba ",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      },
      {
        id: "7",
        nombreProvincia: "Córdoba ",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      },
      {
        id: "8",
        nombreProvincia: "Córdoba ",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      },
      {
        id: "9",
        nombreProvincia: "Córdoba ",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      },
      {
        id: "10",
        nombreProvincia: "Córdoba ",
        nombreCapital: "Córdoba",
        descripcion: "Es la Es una provincia ubicada en el centro del país, conocida por sus paisajes serranos y su historia colonial. Es un destino popular para el turismo interno, especialmente para aquellos que buscan aventuras al aire libre.",
        imagenProvincia: "./assets/media/cordoba.jpg",
        videoProvincia: "https://www.youtube.com/embed/FtD7hBacnTo",
        region:"Centro"
      }
    ]
  }

  storageProvincia(){

    localStorage.setItem("ListaProvincia",JSON.stringify(this.listaProvincias))


  }

  

  getProvincias(): ProvinciaModel[] {

    return this.listaProvincias;

  }
}
