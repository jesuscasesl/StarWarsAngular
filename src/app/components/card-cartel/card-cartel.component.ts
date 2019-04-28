import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cartel',
  templateUrl: './card-cartel.component.html',
  styleUrls: ['./card-cartel.component.css']
})
export class CardCartelComponent implements OnInit {

  @Input() public page: string;
  @Input() public film: any;
  @Input() public filmImg: string[];

  public isHome: boolean;

  constructor() { }

  ngOnInit() { }

  public getYearFull( year ) {
    const yearFull = new Date( year );
    return yearFull.getFullYear();
  }
}