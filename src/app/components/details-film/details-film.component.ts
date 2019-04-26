import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-film',
  templateUrl: './details-film.component.html',
  styleUrls: ['./details-film.component.css']
})
export class DetailsFilmComponent implements OnInit {

  @Input() public film: any;

  constructor( ) { }

  ngOnInit() { }

}
