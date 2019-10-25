import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-example1',
  animations:[
    trigger("changeWordColor", [
      state("state1", style({
         color: "green",
         fontSize: '180px',
         height: "200px",
      })),
      state("state2", style({
        color: "yellow",
        fontSize: '200px',
        height: "200px"
      })),
      transition("state1 <=> state2", [
        animate('0.5s')
      ]),
    ])
],
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {
  
  whichState = true;
  switchState : boolean;

  changeState (switchState : boolean): void{
      switchState = !this.whichState;
      this.whichState = switchState;
  }
  constructor() { }

  ngOnInit() {
  }

}
