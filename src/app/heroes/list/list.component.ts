import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroes: string[] = ['ironman', 'spiderman', 'hulk', 'thor'];
  public deletedHero: string = '';

  removeLastHeroe(): void {
    this.deletedHero = this.heroes.pop() ?? '';
  }
}
