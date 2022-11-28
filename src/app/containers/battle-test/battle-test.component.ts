import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/class/player';
import { Enemies } from 'src/app/class/enemies';
import { Battle } from 'src/app/class/battle';
import { Characters } from 'src/app/class/characters';

@Component({
  selector: 'app-battle-test',
  templateUrl: './battle-test.component.html',
  styleUrls: ['./battle-test.component.css']
})
export class BattleTestComponent implements OnInit {
  private player:Player = new Characters(0,'','',0,0,0,0,0,[0]);
  private enemy:Enemies = new Characters(0,'','',0,0,0,0,0,[0]);


  constructor() { }

  ngOnInit(): void {

  }

}
