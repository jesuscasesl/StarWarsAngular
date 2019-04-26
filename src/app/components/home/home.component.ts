import { Component, OnInit } from '@angular/core';

import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public films: any[];
  public isLoading: boolean;
  public isError: boolean;
  public messageError: string;

  constructor( private startWars: StarwarsService ) {
    this.films = [];
    this.isLoading = false;
    this.messageError = '';
  }

  ngOnInit() { }

  public resetAllFilm() {
    this.films = [];
  }

  public showAllFilm() {
    this.getAllFilm();
  }

  public getAllFilm() {
    this.isLoading = true;
    this.startWars.getFilms()
      .subscribe( ( data: any ) => {
        this.films = data.results.sort((a, b) => parseFloat(a.episode_id) - parseFloat(b.episode_id));;
        this.isLoading = false;
        console.log(this.films);
      }, ( errorService ) => {
        this.isError = true;
        this.isLoading = false;
        this.messageError = errorService.error.error.message;
      });
  }

  public searchFilm( filmSearch ) {
    if ( filmSearch.length === 0 ) {
      this.films = [];
    } else {
      this.getSearchFilm( filmSearch );
    }
  }

  public getSearchFilm( filmSearch ) {
    this.isLoading = true;
    this.startWars.getFilms()
    .subscribe( ( data: any ) => {
      this.films = data.results.filter( film => film.title.toUpperCase().includes(filmSearch.toUpperCase()));
      this.isLoading = false;
    }, ( errorService ) => {
      this.isError = true;
      this.isLoading = false;
      this.messageError = errorService.error.error.message;
    });
  }

}
