import { Component, OnDestroy, OnInit } from '@angular/core';
import { Songs } from 'src/app/class/songs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{
  song = new Songs().theBraveTheme();



  constructor(){

  }
  ngOnInit(): void {

    this.song.play();

  }
  ngOnDestroy(): void {
    this.song.pause();
  }
}
