import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
  animations: [
    trigger('title', [
      state(
        'start',
        style({
          transform: 'translate(0px, 0px)',
          opacity: '1',
        })
      ),
    ]),
  ],
})
export class EntertainmentComponent implements OnInit {
  public titleState: string = 'start';
  
  public museums: boolean = false;
  public theatres: boolean = false;
  public malls: boolean = false;
  public cinemas: boolean = false;
  public kidsCentres: boolean = false;

  constructor() { }

  public showMuseums() {
    this.museums = !this.museums;
    this.cinemas = false;
    this.theatres = false;
    this.kidsCentres = false;
    this.malls = false;
  }
  public showTheatres() {
    this.theatres = !this.theatres;
    this.museums = false;
    this.cinemas = false;
    this.kidsCentres = false;
    this.malls = false;
  }
  public showMalls() {
    this.malls = !this.malls;
    this.theatres = false;
    this.museums = false;
    this.cinemas = false;
    this.kidsCentres = false;
  }
  public showCinemas() {
    this.cinemas = !this.cinemas;
    this.theatres = false;
    this.museums = false;
    this.kidsCentres = false;
    this.malls = false;
  }
  public showKidsCentres() {
    this.kidsCentres = !this.kidsCentres;
    this.theatres = false;
    this.museums = false;
    this.cinemas = false;
    this.malls = false;
  }

  ngOnInit(): void {
  }

}
