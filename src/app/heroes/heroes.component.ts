import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/mocks/mock-heroes';
import { Hero } from '../interfaces/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass'],
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.dir(hero);
  }
  constructor() {}

  ngOnInit(): void {}
}
