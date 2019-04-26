import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  public film: any;
  public isLoading: boolean;
  public isError: boolean;
  public messageError: string;
  public idFilm: string;

  constructor(
    private startWars: StarwarsService,
    private route: ActivatedRoute
  ) {
    this.film = {};
    this.isLoading = false;
    this.messageError = '';
  }

  ngOnInit() {
    this.getFilm();
  }

  public getFilm() {
    this.isLoading = true;
    this.idFilm = this.route.snapshot.params.id;
    this.startWars.getFilm( this.idFilm )
      .subscribe( ( data: any ) => {
        this.film = data;
        this.isLoading = false;
        this.setVisit( this.film.title );
      }, ( errorService ) => {
        this.isError = true;
        this.isLoading = false;
        this.messageError = errorService.error.error.message;
      });
  }

  public setVisit( title: object ) {
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
