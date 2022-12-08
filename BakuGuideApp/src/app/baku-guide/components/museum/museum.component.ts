import { Component, Input, OnInit } from '@angular/core';
import { Museum } from '../../models/museum';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.scss'],
})
export class MuseumComponent implements OnInit {
  @Input()
  public museum: Museum;

  constructor() {}

  ngOnInit(): void {}
}
