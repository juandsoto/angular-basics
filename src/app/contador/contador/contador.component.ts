import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      La base es: <strong> {{ base }} </strong>
    </h3>
    <button (click)="disminuir()">- {{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="aumentar()">+ {{ base }}</button>
  `,
})
export class ContadorComponent {
  public titulo: string = 'Contador App';
  public numero: number = 10;
  public base: number = 5;

  aumentar(): void {
    this.numero += this.base;
  }

  disminuir(): void {
    this.numero -= this.base;
  }
}
