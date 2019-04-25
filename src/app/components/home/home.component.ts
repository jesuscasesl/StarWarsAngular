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
    this.isLoading = true;
    this.isLoading = false;
    this.messageError = '';
  }

  ngOnInit() {
    this.startWars.getFilms()
      .subscribe( ( data: any ) => {
        this.films = data.results;
        this.isLoading = false;
        console.log(this.films);
      }, ( errorService ) => {
        this.isError = true;
        this.isLoading = false;
        this.messageError = errorService.error.error.message;
      });
  }

}
