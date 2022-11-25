import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-battle-log',
  templateUrl: './battle-log.component.html',
  styleUrls: ['./battle-log.component.css']
})
export class BattleLogComponent implements OnInit {

  @Input()
  battleLog:string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
