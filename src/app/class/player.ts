import { Characters } from "./characters";
import gameConfig from '../../assets/data/characters.json'
export class Player extends Characters{

  constructor(
    id:number,
    name:string,
    profile:string,
    hp:number,
    mp:number,
    atk:number,
    def:number,
    spd:number,
    abilities:number[],
    weakness:number[]
    ){
      super(
        id,
        name,
        profile,
        hp,
        mp,
        atk,
        def,
        spd,
        abilities,
        weakness
        );
    }


  }

