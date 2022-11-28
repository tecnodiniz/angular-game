import gameConfig from '../../assets/data/characters.json'

export class Characters{
  private id:number = 0;
  private name:string = "";
  private profile:string = "";
  private hp:number = 0;
  private mp:number = 0;
  private atk:number = 0;
  private def:number = 0;
  private spd:number = 0;
  private abilities:number[] = [0];

  private atkPoints:number = 0;
  private defPoints:number = 0;
  private abilityId:number = 0;

  constructor(id:number,
              name:string,
              profile:string,
              hp:number,
              mp:number,
              atk:number,
              def:number,
              spd:number,
              abilities:number[]){

                this.id = id;
                this.name = name;
                this.profile = profile;
                this.hp = hp;
                this.mp = mp;
                this.atk = atk;
                this.def = def;
                this.spd = spd;
                this.abilities = abilities;
  }
  //getters and setters
  getName():string{
    return this.name;
  }
  setName(name:string):void{
    this.name = name;
  }
  getProfile():string{
    return this.profile;
  }
  setProfile(profile:string){
    this.profile = profile;
  }
  getHp():number{
    return this.hp;
  }
  setHp(value:number):void{
    this.hp = value;
  }
  getMp():number{
    return this.mp;
  }
  setMp(value:number):void{
    this.mp = value;
  }
  getAtk():number{
    return this.atk;
  }
  setAtk(value:number):void{
    this.atk = value;
  }
  getDef():number{
    return this.def;
  }
  setDef(value:number):void{
    this.def = value;
  }
  getSpd():number{
    return this.spd;
  }
  setSpd(value:number):void{
    this.spd = value;
  }
  getAbilities():number[]{
    return this.abilities;
  }
  setAbilities(value:number[]):void{
    this.abilities = value;
  }
  getAbilityId():number{
    return this.abilityId;
  }
  setAbilityId(id:number):void{
    this.abilityId = id;
  }
  getAtkPoints():number{
    return this.atkPoints;
  }
  setAtkPoints(value:number):void{
    this.atkPoints = value;
  }
  getDefPoints():number{
    return this.defPoints;
  }
  setDefPoints(value:number):void{
    this.defPoints = value;
  }


  //Actions

  takeDmg(character:Characters, dmg:number){
    let life:number = character.getHp();
    life -= dmg;
    character.setHp(life);
  }

  checkMp(id:number):boolean{
    var result = false
    const ability = gameConfig.abilities.find(ability => ability.id == id)
    if(ability){
      if(this.getMp()>= ability.cost){
        this.setAbilityId(id);
        result = true;
      }
      else
      result = false;
    }
    return result;
  }

}


