import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
  @Input()
  hp:number = 0;
  @Input()
  mp:number = 0;
  @Input()
  spd:number = 0;
  @Input()
  atk:number = 0;
  @Input()
  def:number = 0;
  @Input()
  ability:string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
