import { Component, OnInit } from '@angular/core';
import characters from '../../../assets/data/characters.json'
@Component({
  selector: 'app-char-select',
  templateUrl: './char-select.component.html',
  styleUrls: ['./char-select.component.css']
})
export class CharSelectComponent implements OnInit {
  characters:any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.characters = characters.character
  }

}
