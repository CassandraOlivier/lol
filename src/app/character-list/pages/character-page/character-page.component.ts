import { Component, OnInit } from '@angular/core';
import { Character } from '../../modele/Character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {

  characters : Array<Character> = [];
  isAddView : boolean = false;
  constructor(private characterService : CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters();
    this.getCharacters();
  }

  getCharacters = () : void => {
    this.characterService.characterStream.subscribe( data  => {
        this.characters = data;
    }, err => console.error(err) )
  }

  deleteCharacter(i:number){
    this.characterService.deleteCharacter(i).subscribe( data =>{
      this.characterService.getCharacters();
    })
  }

  addCharacterInParent = (character : Character) : void => {
    this.characterService.addCharacter(character).subscribe(data =>
      {
        this.characterService.getCharacters();
      });
    this.isAddView = !this.isAddView;
 }

  displayAddView() : void {
    this.isAddView = !this.isAddView;
  } 

  updateCharacter = (character : Character) : void => {
   this.characterService.updateCharacter(character).subscribe( data =>  {
      this.characterService.getCharacters();
   }, err => console.error(err))
  }
 
}
