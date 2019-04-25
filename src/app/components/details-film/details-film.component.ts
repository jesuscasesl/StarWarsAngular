import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StarwarsService } from '../../services/starwars.service';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {

  public film: object;
  public isLoading: boolean;
  public isError: boolean;
  public messageError: string;
  public idFilm: string;

  constructor(
    private startWars: StarwarsService,
    private route: ActivatedRoute
  ) {
    this.film = {};
    this.isLoading = true;
    this.isLoading = false;
    this.messageError = '';
  }

  ngOnInit() {
    this.idFilm = this.route.snapshot.params['id'];
    this.startWars.getFilm( this.idFilm )
      .subscribe( ( data: any ) => {
        debugger;
        this.film = data;
        this.isLoading = false;
        console.log(this.film);
      }, ( errorService ) => {
        this.isError = true;
        this.isLoading = false;
        this.messageError = errorService.error.error.message;
      });
  }

}
