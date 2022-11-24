import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

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
  titleState: string = 'start';
  quoteState: string = 'start';
  pulseState: string = 'start';
  trigger: boolean;
  public imageObject: Array<object> = [
    {
    "image": "../../../../assets/images/palaceofshi.jpg",
    "thumbImage": "../../../../assets/images/palaceofshi.jpg",
    "alt": "The UNESCO-Listed Historic Center",
    "title": "The UNESCO-Listed Historic Center"
  },
  {
    "image": "../../../../assets/images/caspiancoast.jpg",
    "thumbImage": "../../../../assets/images/caspiancoast.jpg",
    "alt": "The Caspian Coast",
    "title": "The Caspian Coast"
  },
  {
    "image": "../../../../assets/images/absheron-peninsula.jpg",
    "thumbImage": "../../../../assets/images/absheron-peninsula.jpg",
    "alt": "Visit the Absheron Peninsula",
    "title": "Visit the Absheron Peninsula"
  },
  {
    "image": "../../../../assets/images/kebabs.jpg",
    "thumbImage": "../../../../assets/images/kebabs.jpg",
    "alt": "World-Class Kebabs",
    "title": "World-Class Kebabs"
  },
  {
    "image": "../../../../assets/images/carpet-museum.jpg",
    "thumbImage": "../../../../assets/images/carpet-museum.jpg",
    "alt": "Plenty of Museums to Explore",
    "title": "Plenty of Museums to Explore"
  },
  ];

  constructor() {}

  ngOnInit(): void {
    const pulse = setInterval(() => (this.trigger = !this.trigger), 1000);
  }

  display: any;
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: 40.4093,
    lng: 49.8671,
  };
  markerPositions: google.maps.LatLngLiteral[] = [{ lat: 40, lng: 49 }];
  zoom = 11;
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = event.latLng.toJSON();
  }
  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
