export class CharacterModel {

 private id:number = 0;
 private name:string = "";
 private profile:string = "";
 private hp:number = 0;
 private mp:number = 0;
 private spd:number = 0;
 private atk:number = 0;
 private abilitiesId:number[] = [0];

 //actions
 private hit:number = 0;
 private block:number = 0;
 private skill:number = 0;
 private playerAction:string = '';

 private abilitiesAll = [
  {
    "id":0,
    "name":"",
    "description":"",
    "cost":0
  }
];
  getName():string{
    return this.name;
  }
  getProfile():string{

    return this.profile;
  }
  getAtk():number{
    return this.atk;
  }
  setAtk(atk:number):void{
    this.atk = atk;
  }
  getHit():number{
    return this.hit;
  }
  setHit(value:number){
    this.hit = value;
  }
  getBlock():number{
    return this.block;
  }
  getSkill():number{
    return this.skill;
  }
  setSkill(id:number):void{
    this.skill = id;
  }
  getHp():number{
    return this.hp;
  }
  getMp():number{
    return this.mp;
  }
  getSpd():number{
    return this.spd;
  }
  getApId():number[]{
    return this.abilitiesId;
  }
  getPlayerAction():string{
    return this.playerAction;
  }
  setPlayerAction(action:string):void{
    this.playerAction = action;
  }



  constructor(id:number,
              name:string,
              profile:string,
              hp:number,
              mp:number,
              spd:number,
              atk:number,
              abilitiesId:number[],
              abilitiesAll:any[]
              ){
    this.id = id;
    this.name = name;
    this.profile = profile;
    this.hp = hp;
    this.mp = mp;
    this.spd = spd;
    this.atk = atk;
    this.abilitiesId = abilitiesId;
    this.abilitiesAll = abilitiesAll;

  }

  //Player info
  info():string{
    return`
    Name: ${this.getName()} \n
    Abilities: ${this.getAbility()}\n
    hp: ${this.getHp()} \n
    mp: ${this.getMp()} \n
    spd: ${this.getSpd()} \n
    basic attack: ${this.getAtk()} \n

    `;

  }

  //Get abilities name
  getAbility():string[]{

    var abilitysName = [];
    for(var i = 0; i < this.abilitiesId.length; i++){
      let ap = this.abilitiesAll.find(ap => ap.id == this.abilitiesId[i]);
      if(ap) abilitysName.push(ap.name);
    }
    return abilitysName;
  }

  getAbilityName(id:number):string{
    const ability = this.abilitiesAll.find(ap => ap.id == id)
    var name:string = '';
    if(ability)

    name = ability.name;

    return name;
  }

  //Load ability on card
  getAbilities(){
    var abilities = [];
    for(var i = 0; i < this.abilitiesId.length; i++){
      let ap = this.abilitiesAll.find(ap => ap.id == this.abilitiesId[i]);
      if(ap) abilities.push(ap);
    }
    return abilities;
  }

  //actions
  reseteActions():void{
    this.hit = 0;
    this.block = 0;
    this.skill = 0;
  }
  basicAttack():string{
    this.hit = this.getAtk();
    return `Hit opponent with ${this.getAtk()}`;
  }
  blockAttack():string{
    this.block = 10;
    return `Block oponent attack`;
  }
  useSkill(id:number):string{
    var desc:string = '';

    this.setSkill(id);

    const ability = this.abilitiesAll.find(ap => ap.id == id);
    if(ability)
    desc = ability.description;
    return desc;
  }
  mpCharge(){
    this.mp += 1;
  }
  takeDamage(dmg:number, block:number):number{

    if(block != 0)
      dmg -= Math.floor((dmg * block) / 100);

    this.hp -= dmg;
    if(this.hp < 0) this.hp = 0;

    this.playerAction = `took ${dmg} damage`;
    return this.hp;
  }


  abilities(id:number):void{
    switch (id){
      case 1:
        this.speedUp(id);
        break;
      case 2:
        this.heal(id);
        break;
      case 3:
        this.lifeSteal(id);
        break;
      case 4:
        this.attackUp(id);
        break;
      case 5:
        this.darkBlade(id);
        break;
      case 6:
        this.fireball(id);
        break;
    }

  }
  //Check mp before use ability
  getAbilityCost(id:number):number{

    const ability = this.abilitiesAll.find(ap => ap.id == id);
    var cost:number = 0;
    if(ability)
    {
      cost = ability.cost;


    }


    return cost;

  }
  checkMp(id:number):boolean{
    var hasMp = false;
    const ability = this.abilitiesAll.find(ap => ap.id == id);
    if(ability)
    {
      console.log(ability.cost);
      return this.mp >= ability.cost?hasMp=true:hasMp=false;
    }

    return hasMp;
  }
  noMp():void{
    this.playerAction = "No enought mp";
  }
  // Abilities
  private speedUp(id:number):void{
      this.spd += 1;
      this.mp -= this.getAbilityCost(id);
  }
  private heal(id:number):void{
      this.hp += 30;
      this.mp -= this.getAbilityCost(id);

      if(this.hp > 100){
        this.hp -= (this.hp - 100);
      }
  }
    attackUp(id:number):void{
    this.atk += 10;
    this.mp -= this.getAbilityCost(id);
  }
  private darkBlade(id:number):void{
    this.hit = 60;
    this.mp -= 10;
  }
  private lifeSteal(id:number):void{
    this.hit = 10;
    this.hp += 15;
    if(this.hp > 100){
      this.hp -= (this.hp - 100);
    }
    this.mp -= this.getAbilityCost(id);
  }
  fireball(id:number):void{
    this.hit = 40;
    this.mp -= this.getAbilityCost(id);
  }


}

