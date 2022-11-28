import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
 
  
  constructor() {}

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    lat: 40.4093,
    lng: 49.8671
  }; 
  markerPositions: google.maps.LatLngLiteral[] = [
    {lat: 40.4093, lng: 49.8671}, 
    {lat: 40.4084, lng: 49.9675}
  ];
  markerOptions: google.maps.MarkerOptions = {draggable: false};
  mapInfoWindows = [
    {value: "1"},
    {value: "2"}
  ];
  zoom = 11;
 
  addMarker(event: google.maps.MapMouseEvent) {
    if (event.latLng != null)  this.markerPositions.push(event.latLng.toJSON());
  }
  openInfoWindow(marker: MapMarker, i: any) {
    if (this.infoWindow != undefined) {
      this.infoWindow.open(marker);
    }
  }

  ngOnInit(): void {
  }

}
