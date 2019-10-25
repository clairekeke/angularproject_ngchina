import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  group
} from '@angular/animations';

@Component({
  selector: 'app-example5',
  animations:[
    trigger('groupAnimation', [
      state('final', style({
        color: 'teal',
        backgroundColor: 'lightblue',
      })),
      state('initial', style({
        color: 'violet',
        backgroundColor:'white',
      })),
      transition('initial => final', [
        group([
          animate('3s', style({color: 'teal'})),
          animate('3s', style({backgroundColor: 'lightblue'})),
        ])
      ]),
      transition('final => initial', [
        group([
          animate('3s', style({color: 'violet'})),
          animate('3s', style({backgroundColor: 'white'}) ),
        ])
      ])
    ])
  ],
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.css']
})
export class Example5Component implements OnInit {

  state = true;

 toggle() {
   this.state = !this.state;
 }

  constructor() { }

  ngOnInit() {
  }

}
