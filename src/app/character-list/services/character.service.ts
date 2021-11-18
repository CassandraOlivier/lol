import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from 'src/environments/environment';
import { Character } from '../modele/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characterStream = new BehaviorSubject<Character[]>([]);

  constructor(private http : HttpClient) { }

  getCharacters = () : void =>{
    this.http.get<Character[]>(environment.url).subscribe(
      data =>{
        this.characterStream.next(data);
      }
    )
  }
}
