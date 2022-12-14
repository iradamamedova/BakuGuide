import { Component, OnInit } from '@angular/core';
import { Park } from '../../models/park';
import { ParksService } from '../../services/parks.service';

@Component({
  selector: 'app-outdoor-activities',
  templateUrl: './outdoor-activities.component.html',
  styleUrls: ['./outdoor-activities.component.scss'],
})
export class OutdoorActivitiesComponent implements OnInit {
  public parks: Park[];

  public p: number = 1;

  constructor(private parksService: ParksService) {}

  ngOnInit(): void {
    this.parksService.parks$.subscribe((parks: Park[]) => {
      this.parks = parks;
    });
  }
}
