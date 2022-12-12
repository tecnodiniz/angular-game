import { Component, OnDestroy, OnInit} from '@angular/core';
import { Songs } from 'src/app/class/songs';
import characters from '../../../../assets/data/characters.json';

@Component({
  selector: 'app-free-game',
  templateUrl: './free-game.component.html',
  styleUrls: ['./free-game.component.css']
})
export class FreeGameComponent implements OnInit, OnDestroy{

  music:Songs = new Songs();

  themeSong = new Audio();
  songUrl:string  = '';
  muted:boolean = false;

  characters:any;
  enemies:any;
  abilities = characters.abilities;

  // Enemy Info
  enemyId:number = 0;
  characterEnemyName:string = "";
  enemyImage:string ="whosWhite.png";
  enemyHp:number = 0;
  enemyMp:number = 0;
  enemySpd:number = 0;
  enemyAtk:number = 0;
  enemyDef:number = 0;
  enemyAp:string[] = [];
  enemyWeakness:string[] = [];
  enemyInfo:boolean = false;

  // Player Info
  characterId:number = 0;
  characterPlayerName:string = "";
  playerImage:string ="whosWhite.png";
  playerHp:number = 0;
  playerMp:number = 0;
  playerSpd:number = 0;
  playerAtk:number = 0;
  playerDef:number = 0;
  playerAp:string[] = [];
  playerWeakness:string[] = [];
  playerInfo:boolean = false;


  //Dinamic of Painel
  bothSelected:boolean = false;
  playerSelected:boolean = false;
  enemySelected:boolean = false;
  selected:boolean = false;



  selectedChars:number[] = [0,0];

  getCharacterPlayer(id:number){
    this.selectedChars[0] = id;
    this.playerAp = [];

    const player = characters.character.find(char => char.id == id);
    if(player){
      this.characterPlayerName = player.name;
      this.playerImage = player.profile;
      this.characterId = player.id;
      this.playerHp = player.hp;
      this.playerMp = player.mp;
      this.playerSpd = player.spd;
      this.playerAtk = player['basic-atk'];
      this.playerDef = player.def;

      player.abilities.map(id => this.playerAp.push(this.getAbilitiesName(id)));

      this.playerInfo = true;
      this.playerSelected = true;
      this.characterSelected();
    }

  }
  getCharacterEnemy(id:number){
    this.selectedChars[1] = id;

    this.selectedChars[0] = id;
    this.enemyAp = [];

    const enemy = characters.enemies.find(char => char.id == id);
    if(enemy){
      this.characterEnemyName = enemy.name;
      this.enemyImage = enemy.profile;
      this.enemyId = enemy.id;

      this.enemyHp = enemy.hp;
      this.enemyMp = enemy.mp;
      this.enemySpd = enemy.spd;
      this.enemyAtk = enemy.atk
      this.enemyDef = enemy.def;
      enemy.abilities.map(id => this.enemyAp.push(this.getAbilitiesName(id)));

      this.enemyInfo = true;
      this.enemySelected = true;
      this.characterSelected();
    }
  }
  getAbilitiesName(id:number):string{
    const ability = this.abilities.find(ap => ap.id == id);
    let name = '';
    if(ability)
    name = ability.name;

    return name;
  }

  characterSelected(){
    if(this.playerSelected && this.enemySelected)
    this.bothSelected = true;
  }

  getStart(){
    this.selected = true;

  }
  setSelected(value:boolean):void{
    this.selected = value;

  }

  constructor() { }

  ngOnInit(): void {
    this.characters = characters.character;
    this.enemies = characters.enemies;

  }
  ngOnDestroy(): void {

  }








}
