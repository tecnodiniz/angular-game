import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, OnDestroy {
  song = new Audio();
  faVolumeUp = faVolumeUp;
  faVolumeMute = faVolumeMute;
  mute:boolean = false;
  ulr:string = "/angular-game/assets/audio/";
  stop:boolean = false;

  @Input()
  audio:string = "";

  path:string = "";





  constructor() { }

  ngOnInit(): void {
    this.path = this.ulr+this.audio;
    this.playSong();
  }
  ngOnDestroy(): void {
    this.stopSong();
  }


  playSong(){
    this.mute = false;
    this.song.src = this.path;
    this.song.load();
    this.song.loop = true;
    this.song.play();

  }

  muteSong(){
    this.song.muted = true;
    this.mute = true;
  }
  unMuteSong(){
    this.song.muted = false;
    this.mute = false;

  }
  stopSong(){
    this.song.pause();


  }

}
