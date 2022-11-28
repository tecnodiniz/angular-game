import { Characters } from "../class/characters"

export interface Abilities {
  heal(character:Characters, healPercent:number | null):void;
  lifeSteal(character1:Characters,character2:Characters):void;
}
