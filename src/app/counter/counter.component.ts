import { Component } from "@angular/core";

@Component({
  selector: 'contador-app',
  template: `<h1>{{obtenerTitulo()}}</h1>
            <div>{{obtenerContador()}}</div>
            <button (click)="sumarValor(1)">+1</button>
            <button (click)="sumarValor(-1)">-1</button>
            <button (click)="resetearContador()">Reset</button>`
})
export class CounterComponent {
  private titulo: string = 'Contador Ejemplo';
  private contador: number = 5;

  public obtenerContador(): number {
    return this.contador;
  }

  public sumarValor(numero: number): void {
    this.contador += numero;
  }

  public resetearContador(): void {
    this.contador = 5;
  }

  public obtenerTitulo(): string {
    return this.titulo;
  }

}
