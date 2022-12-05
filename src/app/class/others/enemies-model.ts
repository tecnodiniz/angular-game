import { CharacterModel } from "./character-model";

export class EnemiesModel extends CharacterModel{
  private attacks:number[] = [];
  private actions:number[] = [];
  private enemyAction:string ='';

  override info():string{
    return`
    Name: ${this.getName()} \n
    Abilities: ${this.getAbility()}\n
    hp: ${this.getHp()} \n
    mp: ${this.getMp()} \n
    spd: ${this.getSpd()} \n
    possible attacks: ${this.attacks} \n

    `;
  }
  override attackUp(){
    this.attacks = this.attacks.map(value => value + 10);
    console.log(this.attacks);
  }
  override heal(){
    if(this.getHp() < 100){

      var hp = this.getHp();
      hp += 30;
      this.setHp(hp);

      if(this.getHp() > 100){
        hp = this.getHp();
        hp -= (hp - 100);
        this.setHp(hp);
      }
    }else{
      this.enemyMove();

    }


  }
  action(id:number){

    //getters and setters
  }
  getEnemyAction():string{
    return this.enemyAction;
  }
  setEnemyAction(action:string):void{
    this.enemyAction = action;
  }

enemyMoveLog():string{
 return this.getEnemyAction();
}
enemyMove(){
  const action = Math.floor(Math.random() * this.actions.length);
  const move = this.actions[action];

  switch(move){
    case 1:
      this.reseteActions();
      this.getPossibleAtk();
      break;
    case 2:
      this.reseteActions();
      this.useSkill(this.getPossibleSkill());
      this.setEnemyAction("Used ability "+this.getAbilityName(this.getSkill()));
      break;
  }
}

  getPossibleSkill():number{
    const skill = Math.floor(Math.random() * this.getApId().length);
    this.setSkill(this.getApId()[skill]);
    return this.getSkill();
  }
  getPossibleAtk():number{
    const hit:number = Math.floor(Math.random() * this.attacks.length);

    this.setHit(this.attacks[hit]);
    if(this.getHit() > 0)
    this.setEnemyAction("Enemy hits you");
    else
    this.setEnemyAction("Enemy miss attack");

    return this.getHit();
  }

  constructor(id:number,
    name:string,
    profile:string,
    hp:number,
    mp:number,
    spd:number,
    basicAtk:number,
    abilitiesId:number[],
    abilitiesAll:any[],
    attacks:number[],
    actions:number[]
    ){
    super(id,
      name,
      profile,
      hp,
      mp,
      spd,
      basicAtk,
      abilitiesId,
      abilitiesAll
      );
      this.attacks = attacks;
      this.actions = actions;
  }


}
