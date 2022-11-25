import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-freeze-timer',
  templateUrl: './freeze-timer.component.html',
  styleUrls: ['./freeze-timer.component.css']
})
export class FreezeTimerComponent implements OnInit {
  @Input()
  elapsedTime:number = 20;
  @Input()
  bar:string = "100%";

  constructor() { }

  ngOnInit(): void {
  }

}
