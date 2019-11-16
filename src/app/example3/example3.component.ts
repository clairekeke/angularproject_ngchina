import { Component, OnInit } from '@angular/core';
import {
  trigger,
  animate,
  transition,
  state,
  style,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-example3',
  animations:[
    trigger('keyFrames', [
      state('initial',style({
        color: 'blue'
      })),
      state ('final', style({
        color: 'yellow'
      })),
      transition('initial => final', [
        animate('2s', keyframes([
           style({color: 'blue', offset: 0}),
           style({color: 'red', offset: 0.3}),
           style({color: 'pink', offset: 0.7}),
           style({color: 'green', offset: 0.8}),
           style({color: 'yellow', offset: 1})
        ]))
      ]),
      transition('final => initial', [
        animate('2s', keyframes([
           style({color: 'yellow', offset: 0}),
           style({color: 'green', offset: 0.3}),
           style({color: 'pink', offset: 0.7}),
           style({color: 'red', offset: 0.8}),
           style({color: 'blue', offset: 1})
        ]))
      ])
    ])
  ],
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {
  whichState = true;

  toggle() {
    this.whichState = !this.whichState;
  }

  constructor() { }

  ngOnInit() {
  }

}
