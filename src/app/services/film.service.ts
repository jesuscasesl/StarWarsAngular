import { Injectable } from '@angular/core';
import { Episode } from './../models/episode.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public episode: Episode[] = [
    {
      episode: 'The Phantom Menace',
      img: 'epi1.jpg'
    }, {
      episode: 'Attack of the Clones',
      img: 'epi2.jpg'
    },{
      episode: 'Revenge of the Sith',
      img: 'epi3.jpg'
    },{
      episode: 'A New Hope',
      img: 'epi4.jpg'
    },{
      episode: 'The Empire Strikes Back',
      img: 'epi5.jpg'
    },{
      episode: 'Return of the Jedi',
      img: 'epi6.jpg'
    },{
      episode: 'The Force Awakens',
      img: 'epi7.jpg'
    }
  ]

  constructor() { }

  public getFilm(): Episode[] {
    return this.episode;
  }

  public getNumberFilm(): number {
    return this.episode.length;
  }

  public getCartelFilm( epi: number ): string {
    return this.episode[epi].img;
  }

  public getAllEpisode(): string[] {
    return this.episode.map( p => p.episode );
  }

  public getAllImg(): string[] {
    return this.episode.map( p => p.img );
  }
}
