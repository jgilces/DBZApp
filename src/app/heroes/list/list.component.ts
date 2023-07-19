import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'SheHulk'];
  public lastRemoveHero?: string;

  public removeLastHero(): void {
    this.lastRemoveHero = this.heroes.pop();
  }

}
