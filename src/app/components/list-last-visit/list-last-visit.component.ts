import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-last-visit',
  templateUrl: './list-last-visit.component.html',
  styleUrls: ['./list-last-visit.component.css']
})
export class ListLastVisitComponent implements OnInit {

  public arrayLastVisit: string[];

  constructor() {
    this.arrayLastVisit = [];
  }

  ngOnInit() {
    this.arrayLastVisit = JSON.parse(localStorage.getItem('lastVisit'));
  }

}
