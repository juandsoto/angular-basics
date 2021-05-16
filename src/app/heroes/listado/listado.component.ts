import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public heroes: string[] = [
    'spiderman',
    'ironman',
    'hulk',
    'thor',
    'capitan america',
  ];
  public heroeBorrado: string = '';

  public eliminarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';
  }
}
