import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
