import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.css']
})
export class PlayerStatsComponent implements OnInit {
  @Input()
  hp:number = 0;
  @Input()
  mp:number = 0;
  @Input()
  spd:number = 0;
  @Input()
  atk:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
