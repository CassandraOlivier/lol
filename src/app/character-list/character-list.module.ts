import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDisplayComponent } from './components/character-display/character-display.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';



@NgModule({
  declarations: [
    CharacterDisplayComponent,
    CharacterPageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharacterPageComponent
  ]
})
export class CharacterListModule { }
