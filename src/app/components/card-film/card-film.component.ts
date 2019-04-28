import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.css']
})
export class CardFilmComponent implements OnInit {

  @Input() public film: any;
  @Input() public imgFilm: string[];

  constructor() { }

  ngOnInit() {
    this.getIdFilm();
  }

  public getIdFilm(): string {
    const arrSplit = this.film.url.split('/');
    if ( arrSplit[arrSplit.length] ) {
      return arrSplit[arrSplit.lenght];
    } else {
      return arrSplit[arrSplit.length - 2];
    }
  }
}
