import { Component, Input, OnInit } from '@angular/core';
import { KidsCentre } from '../../models/kids-centre';

@Component({
  selector: 'app-kids-centre',
  templateUrl: './kids-centre.component.html',
  styleUrls: ['./kids-centre.component.scss']
})
export class KidsCentreComponent implements OnInit {

  @Input()
  public kidsCentre: KidsCentre

  constructor() { }

  ngOnInit(): void {
  }

}
