import { Component, OnInit, Input } from '@angular/core';
import { Film } from './../../models/film.model';

@Component({
  selector: 'app-show-film',
  templateUrl: './show-film.component.html',
  styleUrls: ['./show-film.component.css']
})
export class ShowFilmComponent implements OnInit {

  @Input() public films: Film;
  @Input() public imgFilm: string[];
  @Input() public isLoading: boolean;
  @Input() public countFilms: number;

  constructor() { }

  ngOnInit() { }

}
