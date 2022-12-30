import { Component } from '@angular/core';

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css']
})
export class AsincronaComponent {
  nombre!: string;
  apellidos!: string;
  edad!: number;
  datos: any[] = [];

  guardarDatos() {
     this.datos.push({ nombre: this.nombre, apellidos: this.apellidos, edad: this.edad });
  }
  

}
