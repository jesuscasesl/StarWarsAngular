import { Component, OnInit, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchfilm',
  templateUrl: './searchfilm.component.html',
  styleUrls: ['./searchfilm.component.css']
})
export class SearchfilmComponent implements OnInit {

  @Output() public searchFilm =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  public searchArtist( film: string ) {
    if ( film.length > 2 ) {
      this.searchFilm.emit( film );
    } else if( film.length === 0 ) {
      this.searchFilm.emit( film );
    }
  }

}
