import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-sec',
  templateUrl: './select-sec.component.html',
  styleUrls: ['./select-sec.component.css']
})
export class SelectSecComponent implements OnInit {
  selectedOption:string = "";

  selected:boolean = false;

  @Output()
  item = new EventEmitter<string>();

  emiteValue(value:string){
    this.item.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
