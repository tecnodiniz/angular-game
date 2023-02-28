import { Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Player } from 'src/app/class/player';
import { Enemies } from 'src/app/class/enemies';
import { Battle } from 'src/app/class/battle';
import gameConfig from '../../../assets/data/characters.json'

@Component({
  selector: 'app-battle-card',
  templateUrl: './battle-card.component.html',
  styleUrls: ['./battle-card.component.css']
})
export class BattleCardComponent implements OnInit,OnDestroy {


  muted:boolean = false;

  @Input()
  playerId:number = 0;
  @Input()
  enemyId:number = 0;

  @Output() characterSelect = new EventEmitter<boolean>;
  sendValue(select:boolean):void{
    this.characterSelect.emit(select);
  }

  player = new Player(0,'','',0,0,0,0,0,[0],[0],[0]);
  enemy = new Enemies(0,'','',0,0,0,0,0,[0],[0],[0]);

  battle = new Battle(this.player,this.enemy,0);


  constructor() { }

  ngOnInit(): void {
    this.startGame();
  }
  ngOnDestroy(): void {
    
    this.battle.audio.pause();
    this.battle.setGameOver(true);
  }

  startGame(){
    this.setCharacters();
    this.setBattleConfig();
    this.battle.startGame();


    this.player.getInfo();
    this.enemy.getInfo();
  }
  setCharacters(){
    const player = gameConfig.character.find(char => char.id == this.playerId);
    const enemy = gameConfig.enemies.find(char => char.id == this.enemyId);

    if(player && enemy){
      this.player = new Player(
        player.id,
        player.name,
        player.profile,
        player.hp,
        player.mp,
        player['basic-atk'],
        player.def,
        player.spd,
        player.abilities,
        player.weakness,
        player.resistence
      )
      this.enemy = new Enemies(
        enemy.id,
        enemy.name,
        enemy.profile,
        enemy.hp,
        enemy.mp,
        enemy.atk,
        enemy.def,
        enemy.spd,
        enemy.abilities,
        enemy.weakness,
        enemy.resistence
      )
    }

  }
  setBattleConfig(){
    this.battle = new Battle(this.player,this.enemy,30);
  }
  backAction():void{
    this.battle.cursorSong3();
    this.battle.setPlayerSpellCard(false);
  }
  muteMusic(){
    this.battle.audio.muted = true;
    this.muted = true;

  }
  playMusic(){
    this.battle.audio.muted = false;
    this.muted = false;
  }

}
