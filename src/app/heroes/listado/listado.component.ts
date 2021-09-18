import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[] = ['Hulk', 'Thor', 'Spiderman', 'Superman'];
  heroeborrado?: string = "";

  borrarHeroe():void {
      console.log("borrando ....");
      this.heroeborrado = this.heroes.shift();
  }
}
