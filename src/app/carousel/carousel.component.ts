import { Component, OnInit, Input } from '@angular/core';
import { Person } from './../models/person.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  @Input() public title: string;
  @Input() public persons: Person[];
  @Input() public imgPersons: string[];;

  constructor() { }

  ngOnInit() { }

}
