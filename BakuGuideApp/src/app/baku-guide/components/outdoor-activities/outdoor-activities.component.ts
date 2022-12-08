import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Park } from '../../models/park';
import { ParksService } from '../../services/parks.service';

@Component({
  selector: 'app-outdoor-activities',
  templateUrl: './outdoor-activities.component.html',
  styleUrls: ['./outdoor-activities.component.scss'],
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
export class OutdoorActivitiesComponent implements OnInit {
  public titleState: string = 'start';
  public parks: Park[];

  public p: number = 1;

  constructor(private parksService: ParksService) {}

  ngOnInit(): void {
    this.parksService.parks$.subscribe((parks: Park[]) => {
      this.parks = parks;
    });
  }
}
