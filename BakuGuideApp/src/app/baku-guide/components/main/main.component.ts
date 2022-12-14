import { state, style, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { RevealService } from 'src/app/shared/services/reveal.service';
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
  ],
})
export class MainComponent implements OnInit {
  public titleState: string = 'start';
  public quoteState: string = 'start';
  public imageObject: Array<any>;

  constructor(
    private attractionsService: AttractionsService,
    private revealService: RevealService
  ) {}

  ngOnInit(): void {
    this.getReasonsToVisitImages();
    this.revealService.reveal();
  }

  getReasonsToVisitImages() {
    this.attractionsService.reasonsToVisitImages$.subscribe(
      (reasonsToVisitImages: any[]) => {
        this.imageObject = reasonsToVisitImages;
      }
    );
  }
}
