import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})
export class CharacterSelectComponent implements OnInit {

  path:string ="../../../assets/images/";
  @Input()
  characters = [
    {
      "id":0,
      "name":"",
      "profile":""
    }
  ];

  @Output() getCharacterId = new EventEmitter<number>();

  sendId(id:number){
    this.getCharacterId.emit(id);
    this.playAudioConfirm();
  }

  constructor() { }

  ngOnInit(): void {

  }
  playAudioConfirm(){
    let audio = new Audio();
    audio.src = "../../../assets/audio/UI songs/Cursor.wav";
    audio.load();
    audio.play();
  }

}
