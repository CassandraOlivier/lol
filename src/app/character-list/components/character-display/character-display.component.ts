import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../modele/Character';


@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {
  @Input() listByCharacterPage: Array<Character> = [];
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() update: EventEmitter<Character> = new EventEmitter<Character>();
 
  characterActive : boolean = true;
  isUpdateView : boolean = false;
  titleButton : string = "Inactif";
  characterToUpdate: Character = {title : "", name :"", key : "", active:false};
  
  constructor() { }

  ngOnInit(): void {

  }

  changeView(){
    this.characterActive = !this.characterActive
    if(this.characterActive == true){
      this.titleButton = "Inactif";
    }else{
      this.titleButton = "Actif";
    }
  }
  deleteCharacter(i : Character){
    this.delete.emit(i.id);
  }
  
  viewUpdateCharacter(character : Character){
    this.characterToUpdate = character;
    this.isUpdateView = true;
  }

  returnToListOfCharacter(){
    this.isUpdateView = !this.isUpdateView;
  }

  updateCharacter(title: string, key : string, name :string, active : boolean) {
    this.update.emit({title : title, id:this.characterToUpdate.id , key : key,name: name, active:active});

     this.isUpdateView = !this.isUpdateView;
 }
}
