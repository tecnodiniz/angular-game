import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

url:string = "/assets/images/";
@Input()
profile:string = '';

path:string = this.url;
  constructor() { }

  ngOnInit(): void {
  }

}
