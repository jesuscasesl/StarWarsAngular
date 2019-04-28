import { Component, OnInit } from '@angular/core';

import { StarwarsService } from '../../services/starwars.service';

import { Film } from '../../models/film.model';
import { Person } from '../../models/person.model';
import { Episode } from '../../models/episode.model';

import { PersonService } from '../../services/person.service';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public films: Film[];
  public imgFilm: string[];
  public persons: Person[];
  public imgPersons: string[];
  public countFilms: number;
  public isLoading: boolean;
  public isError: boolean;
  public messageError: string;
  public titleCarousel: string;

  constructor(
    private startWars: StarwarsService,
    private personService: PersonService,
    private filmService: FilmService
    ) {
    this.films = [];
    this.countFilms = 1;
    this.isLoading = false;
    this.messageError = '';
    this.titleCarousel = 'Main Characters';
  }

  ngOnInit() {
    this.persons = this.personService.getPerson();
    this.imgPersons = this.personService.getAllImg();
    this.imgFilm = this.filmService.getAllImg();
  }

  public searchFilm( filmSearch ): void {
    if ( filmSearch.length === 0 ) {
      this.films = [];
      this.resetData();
    } else {
      this.getSearchFilm( filmSearch );
    }
  }

  public getSearchFilm( filmSearch ): void {
    this.isLoading = true;
    this.startWars.getFilms()
    .subscribe( ( data: any ) => {
      this.films = data.results
      .filter( f => f.title.toUpperCase().includes( filmSearch.toUpperCase() ))
      .map( f => {
        return {
          title: f.title,
          episode: f.episode_id,
          date: f.release_date,
          description: f.opening_crawl,
          url: f.url,
          img : this.getCartelFilm( f.episode_id )
        };
      });
      this.isLoading = false;
      this.countFilms = this.films.length;
    }, ( errorService ) => {
      this.isError = true;
      this.isLoading = false;
      this.messageError = errorService.error.error.message;
    });
  }

  public getCartelFilm( epi: number ): string {
    return this.filmService.getCartelFilm( epi - 1 );
  }

  public showAllFilm(): void {
    this.getAllFilm();
    this.resetData();
  }

  public getAllFilm(): void {
    this.isLoading = true;
    this.startWars.getFilms()
      .subscribe( ( data: any ) => {
        this.films = data.results.map( f => {
          return {
            title: f.title,
            episode: f.episode_id,
            date: f.release_date,
            description: f.opening_crawl,
            url: f.url,
            img : this.getCartelFilm( f.episode_id )
          };
        }).sort(( a, b ) => +a.episode - +b.episode);
        this.countFilms = this.films.length;
        this.isLoading = false;
      }, ( errorService ) => {
        this.isError = true;
        this.isLoading = false;
        this.messageError = errorService.error.error.message;
      });
  }

  public resetAllFilm(): void {
    this.films = [];
    this.resetData();
  }

  public resetData(): void {
    this.countFilms = 1;
    document.querySelector('.form-input')['value'] = '';
  }
}
