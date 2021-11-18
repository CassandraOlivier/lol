import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../modele/Character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  @Output() newCharacter: EventEmitter<Character> = new EventEmitter<Character>();
  constructor() { }

  ngOnInit(): void {
  }

  addCharacter(title : string, key: string, name: string){
    this.newCharacter.emit({title : title, name: name, key: key, active: true});
  }
}
