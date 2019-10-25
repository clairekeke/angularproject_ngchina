import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  transition,
  state,
  style
} from '@angular/animations';

@Component({
  selector: 'app-example2',
  animations:[
    trigger('EnterOut', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 300ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements OnInit {

  onPage = true;
  move : boolean;

  moveWord(move: boolean): void{
    move = !this.onPage;
    this.onPage = move;
  }
  constructor() { }

  ngOnInit() {
  }

}
