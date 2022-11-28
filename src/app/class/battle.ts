import { Abilities } from "../interface/abilities";
import { BattleSettings } from "../interface/battle-settings";
import { Characters } from "./characters";
import gameConfig from '../../assets/data/characters.json'
import { Player } from "./player";
import { EnemiesModel } from "./enemies-model";
import { Enemies } from "./enemies";

export class Battle implements Abilities{

  private player:Player = new Characters(0,'','',0,0,0,0,0,[0]);
  private enemy:Enemies = new Characters(0,'','',0,0,0,0,0,[0]);

  getPlayer():Player{
    return this.player;
  }
  setPlayer(player:Player):void{
    this.player = player;
  }

  getEnemy():Enemies{
    return this.enemy;
  }
  setEnemy(enemy:Enemies):void{
    this.enemy = enemy;
  }

  //Interface
  heal(character: Characters, healPercent:number | null): void {
    var healPoints:number = 30;
    if(healPercent != 0 && healPercent != null)
    healPoints += (healPoints * healPercent) / 100;

    const heal = gameConfig.abilities.find(ability => ability.id == 2);

    if(heal){
        let life = character.getHp() + healPoints;
        if(character.getHp() > 100)
        life = 100;
        character.setHp(life);
    }
  }

  lifeSteal(character1: Characters, character2:Characters): void {
    console.log("life steal");
  }

}
