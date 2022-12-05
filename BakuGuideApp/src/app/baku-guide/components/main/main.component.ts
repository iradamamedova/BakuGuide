import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AttractionsService } from '../../services/attractions.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
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
    trigger('quote', [
      state(
        'start',
        style({
          transform: 'translate(0px, 0px)',
          opacity: '1',
        })
      ),
    ]),
    trigger('pulse', [
      transition('* => *', [
        animate(
          1000,
          keyframes([
            style({
              transform: 'scale(1)',
              boxShadow: '0 0 2px #666',
              offset: 0,
            }),
            style({
              transform: 'scale(1.009)',
              boxShadow: '0 0 10px #666',
              offset: 0.33,
            }),
            style({
              transform: 'scale(1)',
              boxShadow: '0 0 2px #666',
              offset: 0.66,
            }),
            style({
              transform: 'scale(1.009)',
              boxShadow: '0 0 10px #666',
              offset: 1.0,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class MainComponent implements OnInit {
  public titleState: string = 'start';
  public quoteState: string = 'start';
  public pulseState: string = 'start';
  public trigger: boolean;
  public imageObject: Array<object>;
  public center: google.maps.LatLngLiteral = {
    lat: 40.4093,
    lng: 49.8671
  }; 
  public zoom = 11;

  constructor(private attractionsService: AttractionsService) {}

  ngOnInit(): void {
    const pulse = setInterval(() => (this.trigger = !this.trigger), 1000);
    this.getReasonsToVisitImages();
  }

  getReasonsToVisitImages() {
    this.attractionsService.reasonsToVisitImages$.subscribe(
      (reasonsToVisitImages: Object[]) => {
        this.imageObject = reasonsToVisitImages
      }
    )
  }

}
