import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { ProvinciaModel } from 'src/app/models/provincia-model';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  provincias: ProvinciaModel[] = [];
  seleccionMult: ProvinciaModel[] = [];



  constructor(private servicioProv: ProvinciaService) { }

  ngOnInit(): void {

    this.provincias = this.servicioProv.getProvincias()
    this.servicioProv.storageProvincia();

  }

  addRemoveItem($event: any): void {
    console.log("Capturando el checkbox");
    //Si checked es verdadero agregamos un item al array seleccionMult. Sino, remover 
    if ($event.target.checked) {
      //push agrega un nuevo elemento al array
      this.seleccionMult.push(JSON.parse($event.target.value));

      console.log(this.seleccionMult);


    }
    else {



      //splice quita elementos del array. Recibe splice(inicio, cuantos)
      //indexOf devuelve la posicion en el array del valor pasado por parametro
      const index = JSON.parse($event.target.value);
      const selectedIndex = this.seleccionMult.findIndex(item => item.id === index.id);
      if (selectedIndex !== -1) {
        // Eliminar el objeto del array seleccionMult usando el índice encontrado
        this.seleccionMult.splice(selectedIndex, 1);
      }
      console.log(this.seleccionMult); 
  }
    //el metodo sort mantiene el orden del array. Es conveniente porque las acciones del usuario no lo son
    this.seleccionMult.sort((x, y) => (Number(x.id) || 0) - (Number(y.id) || 0));

    //console.log(this.seleccionMult);

    //this.revelar = $event.target.checked;

    // Obtener el id del elemento seleccionado
    //const id = $event.target.value;

    // Encontrar el usuario seleccionado en la lista de usuarios
    //const usuarioSeleccionado = this.provincias.find(provincias => provincias.id === id);

    // Verificar que se haya encontrado el usuario
    //if (usuarioSeleccionado) {
      // Agregar el video a la columna de video del usuario seleccionado
      //usuarioSeleccionado.video = 'ruta_del_video'; // Reemplaza 'ruta_del_video' con la ruta real del video que deseas agregar
    //}
  };

}
