import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarwarsService {

  constructor( private http: HttpClient ) { }

    getQuery( queryEnd: string ) {
      const url = `https://swapi.co/api/${ queryEnd }`;
      return this.http.get( url );
    }

    getPeoples() {
      return this.getQuery('people');
    }

    getFilms() {
      return this.getQuery('films');
    }

    getFilm( idFilm: string) {
      return this.getQuery(`films/${idFilm}`);
    }
}
