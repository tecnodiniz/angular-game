import { Component, OnInit, Input, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, OnDestroy {
  song = new Audio();
  mute:boolean = false;
  ulr:string = "../../../assets/audio/";

  @Input()
  audio:string = "";

  path:string = "";



  constructor() { }

  ngOnInit(): void {
    this.path = this.ulr+this.audio;
    this.playSong();
  }
  ngOnDestroy(): void {
    this.muteSong();
  }


  playSong(){
    this.mute = false;
    this.song.src = this.path;
    this.song.load();
    this.song.loop = true;
    this.song.play();

  }

  muteSong(){
    this.song.pause();
    this.mute = true;
  }

}
