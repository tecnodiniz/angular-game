import { Characters } from "./characters";

export class Enemies extends Characters {
  constructor(
    id:number,
    name:string,
    profile:string,
    hp:number,
    mp:number,
    atk:number,
    def:number,
    spd:number,
    abilities:number[]
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
        );
    }

}
