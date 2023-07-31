import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public parentCharacterList: Character[] = [{id:uuid(), name: 'Goku', power: 8900}];

  addCharacter(characterInfo: Character): void {
    const newCharacter = {
      id: uuid(),
      ...characterInfo
    }

    this.parentCharacterList.push(newCharacter);

    Swal.fire('Personaje añadido a la lista.', 'Mensaje del Sistema', 'success');
  }

  deleteCharacter(id: string | undefined): void {
    Swal.fire({
      title: '¿Esta seguro que desea eliminar al Personaje?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'No',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.parentCharacterList = this.parentCharacterList.filter((character) => character.id !== id);
        Swal.fire('Personaje eliminado con éxito', '', 'success')
      } else if (result.isDismissed) {
        Swal.fire('Operación Cancelada con éxito.', '', 'info')
      }
    });
  }

}
