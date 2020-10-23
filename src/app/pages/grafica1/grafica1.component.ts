import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {


  GetTitulos(titulo: string) {

    if (titulo.length == 0) {
      titulo = "Sin Titulo"
      return titulo;

    } else {
      return titulo;
    }

  }

 @Input('labels')  label1: string[] = ['pan', 'Arroz', 'Huevo'];
                    label2: string[] = ['leche','carne','pollo']
   @Input('data')  data1 = [
    [400, 100, 200],

  ];

}
