import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-bar',
  templateUrl: './time-bar.component.html',
  styleUrls: ['./time-bar.component.css']
})
export class TimeBarComponent implements OnInit{
  @Input()
  bar:string = "100%";

  constructor() { }

  ngOnInit(): void {


  }



}
