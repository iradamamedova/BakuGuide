import { Component, Input, OnInit } from '@angular/core';
import { Attraction } from '../../models/attraction';

@Component({
  selector: 'app-attraction',
  templateUrl: './attraction.component.html',
  styleUrls: ['./attraction.component.scss']
})
export class AttractionComponent implements OnInit {

  @Input()
  public attr: Attraction;
  public details: boolean = true;

  constructor() {}

  ngOnInit(): void {
  }

}
