import { Component, OnInit } from '@angular/core';
import { rejects } from 'assert';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsuarios().then((usuarios) => {
      console.log(usuarios);
    });

    // ---EJEMPLO DE PROMESAS----
    /*const promesa = new Promise((resolve, reject) => {
      if (true) {
        resolve('hola mundo');
      } else {
        reject('Algo salio mal');
      }
    });
    promesa
      .then((mensaje) => {
        console.log(mensaje);
      })
      .catch((error) => console.log('algo salio mal en la promesa', error));

    console.log('fin del Init');*/
  }
  getUsuarios() {
    ///GENERAR PROMESAS
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => {
          resolve(body.data);
        });
    });
  }
}
