import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {
  valor1:number;
  valor2:number;
  respuesta:number;
  operador=null;

  constructor() { }

  operacion(){
    if(this.operador =='+'){
      this.respuesta=this.valor1 + this.valor2;
        }else if(this.operador=='-') {
          this.respuesta=this.valor1 - this.valor2;
          }else if(this.operador=='*'){
            this.respuesta=this.valor1 * this.valor2;
           }else if(this.operador=='/'){
            this.respuesta=this.valor1 / this.valor2;
            }           
    
  }


  ngOnInit() {
  }

}
