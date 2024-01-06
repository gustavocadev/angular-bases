import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  public onDeleteId = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [];

  public emitDeleteCharacter(id?: string): void {
    // todo: Emitir el evento
    if (!id) return;

    this.onDeleteId.emit(id);
  }
}
