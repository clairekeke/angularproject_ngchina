import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-example4',
  animations: [
    trigger('listOfWords', [
      transition(':enter', [
        query('p', [
          style({opacity: 0, transform: 'translate(-100px)'}),
          stagger(-30, [
            animate('500ms cubiic-bezier(0.35, 0, 0.25, 1)', style({opacity: 1, transform: 'none'}))
          ])
        ])
      ]),
      transition(':leave',[
        query('p', [
          style({opacity: 1, transform: 'none'}),
          stagger(-30, [
            animate('500ms cubiic-bezier(0.35, 0, 0.25, 1)', style({opacity: 0, transform: 'translate(-100px)'}))
          ])
        ])
      ])
    ])
  ],
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  animatepage = true; 

  push() {
    this.animatepage = !this.animatepage;
  }
  constructor() { }

  ngOnInit() {
  }

}
