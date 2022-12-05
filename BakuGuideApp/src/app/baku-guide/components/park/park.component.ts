import { Component, Input, OnInit } from '@angular/core';
import { Park } from '../../models/park';
import { ParksService } from '../../services/parks.service';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styleUrls: ['./park.component.scss']
})
export class ParkComponent implements OnInit {

  @Input()
  public park: Park;

  constructor(private parksService: ParksService) { }

  ngOnInit(): void {}

}
