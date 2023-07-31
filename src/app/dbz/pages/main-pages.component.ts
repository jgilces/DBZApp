import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPagesComponent {

  constructor(private dbzService: DbzService){}

  get characterList(): Character[] {
    return this.dbzService.parentCharacterList;
  }

  public deleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }

  public addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
