import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public film: string[] = [
    'epi1.jpg',
    'epi2.jpg',
    'epi3.jpg',
    'epi4.jpg',
    'epi5.jpg',
    'epi6.jpg',
    'epi7.jpg'
  ];

  constructor() { }

  public getFilm(): string[] {
    return this.film;
  }

  public getNumberFilm(): number {
    return this.film.length;
  }
}
