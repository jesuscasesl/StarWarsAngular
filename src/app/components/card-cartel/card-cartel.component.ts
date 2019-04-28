import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cartel',
  templateUrl: './card-cartel.component.html',
  styleUrls: ['./card-cartel.component.css']
})
export class CardCartelComponent implements OnInit {

  @Input() public film: any;
  @Input() public filmImg: string[];

  constructor() { }

  ngOnInit() { }

  public getYearFull( year: string ): number {
    return new Date( year ).getFullYear();
  }
}