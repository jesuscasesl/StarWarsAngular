import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor( private http: HttpClient ) { }

    public getQuery( queryEnd: string ) {
      const url = `https://swapi.co/api/${ queryEnd }`;
      return this.http.get( url );
    }

    public getPeoples() {
      return this.getQuery('people');
    }

    public getFilms() {
      return this.getQuery('films');
    }

    public getFilm( idFilm: string) {
      return this.getQuery(`films/${idFilm}`);
    }
}
