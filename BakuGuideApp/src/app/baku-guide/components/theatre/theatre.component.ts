import { Component, Input, OnInit } from '@angular/core';
import { Theatre } from '../../models/theatre';

@Component({
  selector: 'app-theatre',
  templateUrl: './theatre.component.html',
  styleUrls: ['./theatre.component.scss'],
})
export class TheatreComponent implements OnInit {
  @Input()
  public theatre: Theatre;

  constructor() {}

  ngOnInit(): void {}
}
