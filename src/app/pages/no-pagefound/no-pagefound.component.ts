import { Component } from '@angular/core';

@Component({
  selector: 'app-no-pagefound',
  templateUrl: './no-pagefound.component.html',
  styleUrls: ['./no-pagefound.component.css'
  ]
})


export class NoPagefoundComponent {

  constructor() { }
  year = new Date().getFullYear();

}
