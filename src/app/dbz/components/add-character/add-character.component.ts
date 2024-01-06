import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
    id: '',
  };

  emitCharacter(): void {
    if (this.character.name.trim().length === 0) return;

    this.onNewCharacter.emit(this.character);

    // reset form
    this.character = {
      name: '',
      power: 0,
      id: '',
    };
  }
}
