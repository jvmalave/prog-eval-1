import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.page.html',
  styleUrls: ['./datospersonales.page.scss'],
  standalone:false
})
export class DatospersonalesPage implements OnInit {

   // Variables para almacenar datos del usuario
  nombre: string = '';
  email: string = '';
  telefono: string = '';


  constructor() { }

  ngOnInit() {
  }

  // Método para simular guardar los datos ingresados
  guardarDatos() {
    console.log('Datos guardados:', {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono
    });
    alert('Información guardada correctamente');
  }

}
