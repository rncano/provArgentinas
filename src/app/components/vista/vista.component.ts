import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  constructor(private servicioProv: ProvinciaService) { }

  ngOnInit(): void {

    console.log(this.servicioProv.getProvincias())

  }

}
