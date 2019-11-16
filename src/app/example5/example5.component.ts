import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group
} from '@angular/animations';

@Component({
  selector: 'app-example5',
  animations:[
    trigger('groupAnimation', [
      state('final', style({
        color: 'teal',
        transform: 'translateY(150px)',
      })),
      state('initial', style({
        color: 'violet',
        transform: 'translate(0)'
      })),
      transition('initial => final', [
        group([
          animate('0.5s ease', style({color: 'teal'})),
          animate('0.5s 0.5s ease', style({transform: 'translateY(150px)'})),
        ])
      ]),
      transition('final => initial', [
        group([
          animate('0.5s ease', style({color: 'violet'})),
          animate('0.5s 0.5s ease', style({transform: 'translateY(0px)'}) ),
        ])
      ])
    ])
  ],
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.css']
})
export class Example5Component implements OnInit {

 whichState = true;

 toggle() {
   this.whichState = !this.whichState;
 }

  constructor() { }

  ngOnInit() {
  }

}
