import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 45;
  public showButtonChangeName: boolean = true;
  public showButtonChangeAge: boolean = true;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Spiderman';
    this.showButtonChangeName = false;
  }

  changeAge() {
    this.age = 25;
    this.showButtonChangeAge = false;
  }

  reset(): void {
    this.name = 'Ironman';
    this.age = 45;
  }

}
