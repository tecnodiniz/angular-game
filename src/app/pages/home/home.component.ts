import { Component, OnInit } from '@angular/core';
import {CharacterModel} from '../../class/character-model'
import characters from '../../../assets/data/characters.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // player1:CharacterModel = new CharacterModel(0,'',0,0,0,0,0,'');
  // player2:CharacterModel = new CharacterModel(0,'',0,0,0,0,0,'');

  // selectedValue:number = 0;
  // selected:boolean = false;

  // getSelectedValue(value:string){
  //   if(value != ""){
  //     this.selectedValue = parseInt(value);
  //     this.selected = true;
  //   }

  // }
  constructor() { }

  ngOnInit(): void {

    // const character1 = characters.character.find(char => char.id == 1);
    // const character2 = characters.character.find(char => char.id == 2);
    // if(character1){
    //   this.player1 = new CharacterModel(
    //     character1.id,
    //     character1.name,
    //     character1.hp,
    //     character1.mp,
    //     character1.spd,
    //     character1['basic-atk'],
    //     character1.abilities[0].id,
    //     character1.abilities[0].name
    //   )

    // }
    // if(character2){
    //   this.player2 = new CharacterModel(
    //     character2.id,
    //     character2.name,
    //     character2.hp,
    //     character2.mp,
    //     character2.spd,
    //     character2['basic-atk'],
    //     character2.abilities[0].id,
    //     character2.abilities[0].name
    //   )

    // }

    // this.player2.info();



  }


}
