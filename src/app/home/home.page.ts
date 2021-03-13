import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Nombre=null;
  Apellido=null;
  Celular=null;
  Email=null;
  Usuarios = [];

  constructor() {}

  guardarDatos() {
    
    this.Usuarios.push({
    Nombre: this.Nombre
    })
    this.Nombre= " "; 

    this. Usuarios.push({
      Apellido: this.Apellido

    })
    this.Apellido= "";

    this. Usuarios.push({
      Celular: this.Celular

    })
    this.Celular= " ";

    this. Usuarios.push({
      Email: this.Email

    })
    this.Email= " ";

    
  }
  ////////////// eliminar datos
 
  
  eliminar(Usuarios){
    var valor = this.Usuarios.indexOf(Usuarios)

    this.Usuarios.splice(valor,4);
  }

  Editar(Usuarios)
  {
    this.Usuarios 
    {
      Nombre:Usuarios.Nombre;
      Apellido:Usuarios.Apellido;
      Celular:Usuarios.Apellido;
      Email:Usuarios.Email;

    }
   
  }




}
