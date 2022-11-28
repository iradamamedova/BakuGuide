import { Component, Input, OnInit } from '@angular/core';
import { Cinema } from '../../models/cinema';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  @Input()
  public cinema: Cinema;

  constructor() { }

  ngOnInit(): void {
  }

}
