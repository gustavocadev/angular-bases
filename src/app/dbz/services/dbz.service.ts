import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { nanoid } from 'nanoid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    { name: 'Goku', power: 15000, id: nanoid() },
    { name: 'Vegeta', power: 7500, id: nanoid() },
    { name: 'Krillin', power: 5000, id: nanoid() },
  ];

  addCharacter(character: Character): void {
    const newCharacter = { ...character, id: nanoid() };
    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string): void {
    const index = this.characters.findIndex((c) => c.id === id);
    this.characters.splice(index, 1);
  }

  ngOnInit() {}
}
