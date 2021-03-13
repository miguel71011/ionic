import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios = [];

  constructor() { }

  guardarDatos() {
    // Agregando datos a la base de datos en memoria
    this.usuarios.push({
      nombre: this.nombre
    })
    // Limpiando datos
    this.nombre = "";

    this. usuarios.push({
      Apellido: this.apellido

    })
    this.apellido= "";

    this.usuarios.push({
      Celular: this.celular

    })
    this.celular= " ";

    this.usuarios.push({
      Email: this.email

    })
    this.email= " ";

    
  }
  ////////////// eliminar datos
 
  
  eliminar(Usuarios){
    var valor = this.usuarios.indexOf(Usuarios)

    this.usuarios.splice(valor,4);
  }

  Editar(Usuarios)
  {
    this.usuarios 
    {
      Nombre:Usuarios.Nombre;
      Apellido:Usuarios.Apellido;
      Celular:Usuarios.Apellido;
      Email:Usuarios.Email;

    }
   
  }
  
  
}
