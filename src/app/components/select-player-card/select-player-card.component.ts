import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-select-player-card',
  templateUrl: './select-player-card.component.html',
  styleUrls: ['./select-player-card.component.css']
})
export class SelectPlayerCardComponent implements OnInit {
  path:string = "/angular-game/assets/images/";
  @Input()
  character:string = "whosWhite.png";
  @Input()
  name:string = "";

  constructor() { }

  ngOnInit(): void {

  }

}
