import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Attraction } from '../../models/attraction';
import { AttractionsService } from '../../services/attractions.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.scss'],
  animations: [
    trigger('title', [
      state(
        'start',
        style({
          transform: 'translate(0px, 0px)',
          opacity: '1',
        })
      )
    ])
  ]
})
export class AttractionsComponent implements OnInit {
  public titleState: string = 'start';
  public attrs: Array<Attraction>;
  public imageObject: Array<object>;
  public p: number = 1;

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
