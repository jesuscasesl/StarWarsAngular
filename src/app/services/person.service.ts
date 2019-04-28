import { Injectable } from '@angular/core';
import { Person } from './../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  public person: Person[] = [
    {
      name: 'Qui-Gon Jinn',
      img: 'person2.jpg'
    }, {
      name: 'Princesa Leia',
      img: 'person3.jpg'
    }, {
      name: 'Jar Jar Binks',
      img: 'person4.jpg'
    }, {
      name: 'Luke Skywalker',
      img: 'person5.jpg'
    }, {
      name: 'Darth Maul',
      img: 'person6.jpg'
    }, {
      name: 'Han Solo',
      img: 'person7.jpg'
    }, {
      name: 'Chewbacca',
      img: 'person8.jpg'
    }, {
      name: 'C-3PO & R2-D2',
      img: 'person9.jpg'
    }, {
      name: 'Yoda',
      img: 'person10.jpg'
    }, {
      name: 'Darth Vader',
      img: 'person11.jpg'
    }, {
      name: 'Obi-Wan Kenobi',
      img: 'person12.jpg'
    }
  ];

  constructor() { }

  public getPerson(): Person[] {
    return this.person;
  }

  public getNumberPerson(): number {
    return this.person.length;
  }

  public getAllmg(): string[] {
    return this.person.map( p => p.img );
  }
}
