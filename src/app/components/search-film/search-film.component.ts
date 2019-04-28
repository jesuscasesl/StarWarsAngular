import { Component, OnInit, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-film',
  templateUrl: './search-film.component.html',
  styleUrls: ['./search-film.component.css']
})
export class SearchfilmComponent implements OnInit {

  @Output() public handlerSearchFilm =  new EventEmitter<string>();
  @Output() public handlerShowAllFilm =  new EventEmitter<void>();
  @Output() public handlerResetAllFilm =  new EventEmitter<void>();

  constructor() { }

  ngOnInit() { }

  public searchArtist( film: string ): void {
    if ( film.length > 1 ) {
      this.handlerSearchFilm.emit( film );
    }
  }

  public showAllFilm(): void {
    this.handlerShowAllFilm.emit();
  }

  public resetAllFilm(): void {
    this.handlerResetAllFilm.emit();
  }

}
