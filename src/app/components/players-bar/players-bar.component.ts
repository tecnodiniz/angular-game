import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-bar',
  templateUrl: './players-bar.component.html',
  styleUrls: ['./players-bar.component.css']
})
export class PlayersBarComponent implements OnInit {
  @Input()
  bar:string="100%";

  constructor() { }

  ngOnInit(): void {
  }

}
