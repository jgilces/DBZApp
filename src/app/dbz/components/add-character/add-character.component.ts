import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

import Swal from "sweetalert2";

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public characterEmitter: EventEmitter<Character> = new EventEmitter();

  public localCharacter: Character = {name:'', power: 0};

  public emitCharacter(): void {
    console.log('Desde el Hijo: ', this.localCharacter);

    if(!this.localCharacter.name) {
      Swal.fire('Debe ingresar el nombre del personaje.', 'Error del Sistema', 'error');
      return;
    };

    this.characterEmitter.emit(this.localCharacter);

    /*this.localCharacter.name = '';
    this.localCharacter.power = 0;*/
    this.localCharacter = {name: '', power: 0};
  }
}
