// componente manual
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `<h1>Hola mundo {{titulo}}</h1>
    <h3>Base {{base}}</h3>
    <button (click)='acumular(base)'>+{{base}}</button>
    <span>{{numero}}</span>
    <button (click)='acumular(-base);'>-{{base}}</button>`,
})
export class ContadorComponent{
    titulo:string = 'Contador APP';
    numero:number = 10;
  
    base:number =5;
    
    // Metodos
  
    acumular(valor:number){
      this.numero +=valor;
    }
}