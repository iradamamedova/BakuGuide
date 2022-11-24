import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Attraction } from '../../models/attraction';
import { AttractionsService } from '../../services/attractions.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss'],
})
export class AttractionsComponent implements OnInit {
  public attrs: Array<Attraction>;
  public imageObject: Array<object>;

  constructor(private attractionService: AttractionsService) {}

  public ngOnInit(): void {
    this.getAttractions();
    this.getSliderImages();
  }
  public getAttractions() {
    this.attractionService.attractions$.subscribe(
      (attractions: Attraction[]) => {
        this.attrs = attractions;
      }
    );
  }
  public getSliderImages() {
    this.attractionService.attractionsImages$.subscribe(
      (attractionsImages: Object[]) => {
        this.imageObject = attractionsImages;
      }
    );
  }
}
