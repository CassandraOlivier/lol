import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDisplayComponent } from './components/character-display/character-display.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { AddCharacterComponent } from './layout/add-character/add-character.component';



@NgModule({
  declarations: [
    CharacterDisplayComponent,
    CharacterPageComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharacterPageComponent
  ]
})
export class CharacterListModule { }
