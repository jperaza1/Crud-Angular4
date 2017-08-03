import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Crud';

  msg:string = '';

  Clientes = [
    {'codcliente':'1','name': 'Jose Enrique', 'numeroIdentidad':'0502199402274'},
    {'codcliente':'2','name': 'Pepe', 'numeroIdentidad':'0502199402274'},
    {'codcliente':'3','name': 'Julissa', 'numeroIdentidad':'0502199402274'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addCliente():void{
    this.Clientes.push(this.model);
    this.msg = `Cliente Agregado con Id: ${ this.model.codcliente}`;
    this.model = {};
  }

  deleteCliente(i):void{
    this.Clientes.splice(i,1);
    this.msg = `Cliente Eliminado Correctamente`;
  }
  myvalue;
  editCliente(i):void{
    this.hideUpdate = false;
    this.model2.name = this.Clientes[i].name;
    this.model2.codcliente = this.Clientes[i].codcliente;
    this.model2.numeroIdentidad = this.Clientes[i].numeroIdentidad;
    this.myvalue = i;
  }

  updateclientes():void{
    let i = this.myvalue;
    for(var a = 0; a < this.Clientes.length; a++){
      if(i == a){
        this.Clientes[i] = this.model2;
        this.model2 = {};
      }
    }
    this.msg = `Cliente Actualizado Correctamente`;
    this.hideUpdate = true;
  }

  closeAlert():void{
    this.msg = '';
  }


}
