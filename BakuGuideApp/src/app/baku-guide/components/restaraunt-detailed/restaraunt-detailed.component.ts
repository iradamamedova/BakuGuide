import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaraunt } from '../../models/restaurant';
import { RestarauntsService } from '../../services/restaraunts.service';

@Component({
  selector: 'app-restaraunt-detailed',
  templateUrl: './restaraunt-detailed.component.html',
  styleUrls: ['./restaraunt-detailed.component.scss'],
})
export class RestarauntDetailedComponent implements OnInit {
  @Input()
  public restaraunt: Restaraunt;

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  markerOptions: google.maps.MarkerOptions = { draggable: false };

  zoom = 16;

  constructor() {}

  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow) this.infoWindow.open(marker);
  }

  ngOnInit(): void {}
}
