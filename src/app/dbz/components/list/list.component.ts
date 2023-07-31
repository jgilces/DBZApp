import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public charactersList: Character[] = [];

  @Output()
  public emitirEventoDelete: EventEmitter<string> = new EventEmitter();

  eventDeleteCharacter(id?: string): void {
    this.emitirEventoDelete.emit(id);
  }
}
