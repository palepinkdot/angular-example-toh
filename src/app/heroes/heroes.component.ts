import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/mocks/mock-heroes';
import { HeroService } from '../hero.service';
import { Hero } from '../interfaces/hero';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.dir('Selected Hero: ' + hero);
    this.messageService.add(`HeroesComponenet: Selected hero id =${hero.id}`);
  }
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}
