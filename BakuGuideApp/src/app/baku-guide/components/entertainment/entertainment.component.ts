import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss'],
})
export class EntertainmentComponent implements OnInit {
  public museums: boolean = true;
  public theatres: boolean = false;
  public malls: boolean = false;
  public cinemas: boolean = false;

  constructor() {}

  public showMuseums() {
    this.museums = true;
    this.cinemas = false;
    this.theatres = false;
    this.malls = false;
  }
  public showTheatres() {
    this.theatres = true;
    this.museums = false;
    this.cinemas = false;
    this.malls = false;
  }
  public showMalls() {
    this.malls = true;
    this.theatres = false;
    this.museums = false;
    this.cinemas = false;
  }
  public showCinemas() {
    this.cinemas = true;
    this.theatres = false;
    this.museums = false;
    this.malls = false;
  }

  ngOnInit(): void {}
}
