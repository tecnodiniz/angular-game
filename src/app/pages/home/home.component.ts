import { Component, OnInit } from '@angular/core';
import characters from '../../../assets/data/characters.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  characters:any;
  enemies:any;
  characterId:number = 0;
  enemyId:number = 0;
  characterPlayerName:string = "";
  characterEnemyName:string = "";


  //Dinamic of Painel
  bothSelected:boolean = false;
  playerSelected:boolean = false;
  enemySelected:boolean = false;
  selected:boolean = false;



  selectedChars:number[] = [0,0];

  getCharacterPlayer(id:number){
    this.selectedChars[0] = id;

    const player = characters.character.find(char => char.id == id);
    if(player){
      this.characterPlayerName = player.name;
      this.characterId = player.id;

      this.playerSelected = true;
      this.characterSelected();
    }

  }
  getCharacterEnemy(id:number){
    this.selectedChars[1] = id;

    this.selectedChars[0] = id;

    const enemy = characters.enemies.find(char => char.id == id);
    if(enemy){
      this.characterEnemyName = enemy.name;
      this.enemyId = enemy.id;

      this.enemySelected = true;
      this.characterSelected();
    }
  }

  characterSelected(){
    if(this.playerSelected && this.enemySelected)
    this.bothSelected = true;
  }

  getStart(){
    this.selected = true;
  }

  constructor() { }

  ngOnInit(): void {
    this.characters = characters.character;
    this.enemies = characters.enemies;

  }


}
