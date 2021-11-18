import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../modele/Character';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {
  @Input() listByCharacterPage: Array<Character> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
