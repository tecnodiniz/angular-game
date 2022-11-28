import { Component, OnInit,Input } from '@angular/core';
import { CharacterModel } from 'src/app/class/character-model';
import { EnemiesModel } from 'src/app/class/enemies-model';
import characters from '../../../assets/data/characters.json'


@Component({
  selector: 'app-battle-card',
  templateUrl: './battle-card.component.html',
  styleUrls: ['./battle-card.component.css']
})
export class BattleCardComponent implements OnInit {
  @Input()
  characterId:number = 0;
  @Input()
  enemyId:number = 0;

  //Character creation
  player1:CharacterModel = new CharacterModel(0,'','',0,0,0,0,[0],[]);
  player2:EnemiesModel = new EnemiesModel(0,'','',0,0,0,0,[0],[],[],[]);

  //Battle Config
  finishAction:boolean = false;
  gameover:boolean = false;
  skills:boolean = false;

  //Time bar
  timer:number = 0;
  bar:string = "100%";
  sec = 30;
  turn:number = 1;

  //Players settings
  player1Life:string = "100%";
  player2Life:string = "100%";

  //Battle log
  battleLog:string = 'Starting...';

  //On click start
  initGame:boolean = false;
  start:boolean = false;
  countdown:string = "";
  //Process Battle

  //Start
  startGame(){
    this.start = true;
    this.initGame = true;
    this.startingGame(3);

    //reset
    this.player1Life = "100%"
    this.player2Life = "100%";
    this.turn = 1;

    this.gameover = false;

    this.finishAction = false;

    setTimeout(() => {
      this.newTurn(this.sec);
    }, 4000);

  }
  //Next Turn
  newTurn(sec:number){

    this.lifeBarCalc();

    if(!this.gameover){
      sec*=10;
      this.battleLog = "Turn Phase"
      this.finishAction = false;
      this.player1.reseteActions();

      this.startTimer(sec);
    }
  }
    startTimer(seconds:number):number{
    if(seconds > 0 && !this.finishAction){

      setTimeout(() => {
        this.timer = seconds;
        let percent = ((seconds / 10)*100) / this.sec;
        this.bar = percent + "%";

        seconds--;

        return this.startTimer(seconds)
    }, 100);

  }else{
    this.battleLog = "Processing..."
    this.processTurn();
  }
    return seconds;
  }
  //Finish turn
  done():void{
    this.finishAction = true;
  }
  processTurn():void{
    setTimeout(() => {
      this.battleCal();
      this.turn += 1;
      //1 mp per turn
      this.player1.mpCharge();

    }, 3000);
  }

  //Calc Values
  battleCal(){
    //Who is faster?
    if(this.player1.getSpd() > this.player2.getSpd()){

      if(this.player2DmdCalc() <= 0)
        this.newTurn(this.sec);
      else{
        this.player1DmdCalc();
        this.newTurn(this.sec)
      }
    }

    else if (this.player1.getSpd() < this.player2.getSpd()){
      if(this.player1DmdCalc() <= 0){
         this.newTurn(this.sec);
      }
      else{
        this.player2DmdCalc();
        this.newTurn(this.sec);
      }
    }
    else{

      this.player1DmdCalc();
      this.player2DmdCalc();

      this.newTurn(this.sec);

    }

  }
  // IA auto attack
  IAmove():void{
    // const hit:number = Math.floor(Math.random() * this.player2.getPossibleAtk().length);
    // return this.player2.getPossibleAtk()[hit];
    this.player2.enemyMove();
  }
  //Hits Player
  player1DmdCalc():number{
    this.IAmove();

    this.player2.abilities(this.player2.getSkill());
    const dmg = this.player2.getHit();

    this.player1.takeDamage(dmg,this.player1.getBlock());

    console.log("Opponent attack "+dmg);
    console.log("you blocked "+this.player1.getBlock()+"% of damage");

    return this.player1.getHp();


  }
  //Hits opponent
  player2DmdCalc():number{

    this.player1.abilities(this.player1.getSkill());

    const dmg:number = this.player1.getHit();

    this.player2.takeDamage(dmg,0);

    console.log("Player attack "+dmg);

    return this.player2.getHp();

  }

  lifeBarCalc():void{
    if(this.player1.getHp() <= 0){
      this.player1Life = "0%";
      this.gameover = true;
      this.battleLog = `${this.player2.getName()} WIN!`
    }
    else this.player1Life = ((this.player1.getHp() * 100) / 100)+"%";

    if(this.player2.getHp() <= 0){
      this.player2Life = "0%";
      this.gameover = true;
      this.battleLog = `${this.player1.getName()} WIN!`
    }
    else this.player2Life = ((this.player2.getHp() * 100) / 100)+"%";

    if(this.player1.getSpd == this.player2.getSpd && this.player1.getHp() == 0 && this.player2.getHp() == 0){
      this.battleLog = "DRAW"!;
    }

  }
  initializing(){

    const character1 = characters.character.find(char => char.id == this.characterId);
    const character2 = characters.enemies.find(char => char.id == this.enemyId);

    if(character1){
      this.player1 = new CharacterModel(
        character1.id,
        character1.name,
        character1.profile,
        character1.hp,
        character1.mp,
        character1.spd,
        character1['basic-atk'],
        character1.abilities,
        characters.abilities
      )

    }
    if(character2){
      this.player2 = new EnemiesModel(
        character2.id,
        character2.name,
        character2.profile,
        character2.hp,
        character2.mp,
        character2.spd,
        0,
        character2.abilities,
        characters.abilities,
        character2.atk,
        character2.actions
      )
    }
    console.log(this.player1.info());


    console.log(this.player2.info());

  }
  restartGame(){
    this.battleLog = "Restarting match..."
    this.initializing();
    this.startGame();
  }

constructor() { }

  ngOnInit(): void {
    this.initializing();
  }
  //actions
  attack(){
    this.player1.reseteActions();
    this.player1.setPlayerAction(this.player1.basicAttack());
  }
  block(){
    this.player1.reseteActions();
    this.player1.setPlayerAction(this.player1.blockAttack());
  }
  showSkills(){
    this.skills = true;
  }
  selectSkill(id:number){

    if(this.player1.checkMp(id)){

    this.player1.reseteActions();
    this.player1.setPlayerAction(this.player1.useSkill(id));
    this.skills = false;

    }else
    this.player1.noMp();
  }
  back(){
    this.skills = false;
  }
  startingGame(sec:number):void{
    if(sec > 0 ){
      this.countdown = "Starting in..."+sec;
      setTimeout(() => {
        sec--;
        return this.startingGame(sec);

     }, 1000);

    }else{
      this.countdown = "GO!"
    }

 }


}

