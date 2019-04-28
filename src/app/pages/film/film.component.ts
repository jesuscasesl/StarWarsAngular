import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarwarsService } from '../../services/starwars.service';
import { FilmService } from '../../services/film.service';
import { Film } from '../../models/film.model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public film: Film;
  public filmImg: string[];
  public isLoading: boolean;
  public idFilm: string;
  public isError: boolean;
  public messageError: string;

  constructor(
    private startWars: StarwarsService,
    private filmService: FilmService,
    private route: ActivatedRoute
  ) {
    this.isLoading = false;
    this.messageError = '';
  }

  ngOnInit() {
    this.getFilm();
    this.filmImg = this.filmService.getAllImg();
  }

  public getFilm(): void {
    this.isLoading = true;
    this.idFilm = this.route.snapshot.params.id;
    this.startWars.getFilm( this.idFilm )
      .subscribe( ( data: any ) => {
        this.film = {
          title: data.title,
          episode: data.episode_id,
          date: data.release_date,
          description: data.opening_crawl,
          url: data.url,
          img : this.getCartelFilm( data.episode_id )
        };
        this.isLoading = false;
        this.setVisit( this.film.title );
      }, ( errorService ) => {
        this.isError = true;
        this.isLoading = false;
        this.messageError = errorService.error.error.message;
      });
  }

  public getCartelFilm( epi: number ): string {
    return this.filmService.getCartelFilm( epi - 1 );
  }

  public setVisit( title: string ) {
    let arrLastVisit = [];
    const dataLocal = JSON.parse(localStorage.getItem('lastVisit'));

    if ( dataLocal && dataLocal.length === 5 ) {
      dataLocal.shift();
    }

    if ( dataLocal ) {
      arrLastVisit = [...dataLocal];
    }

    arrLastVisit.push( title );
    localStorage.setItem('lastVisit', JSON.stringify(arrLastVisit));
  }
}
