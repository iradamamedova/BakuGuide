import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Attraction } from '../models/attraction';
import { AttractionsDataService } from './attractions-data.service';

@Injectable()
export class AttractionsService {
  private attractions: Attraction[] = [];
  public attractions$: BehaviorSubject<Attraction[]> = new BehaviorSubject<Attraction[]>(this.attractions);
  private attractionsImages: Object[] = [];
  public attractionsImages$: BehaviorSubject<Object[]> = new BehaviorSubject<Object[]>(this.attractionsImages);

  constructor(private attractionsDataService: AttractionsDataService) {
    this.attractionsDataService
      .getAttractions()
      .pipe(take(1))
      .subscribe((attractions: Attraction[]) => {
        this.attractions = attractions;
        this.attractions$.next(this.attractions);
      });
    this.attractionsDataService
      .getAttractionsImages()
      .pipe(take(1))
      .subscribe((attractionsImages: Object[]) => {
        this.attractionsImages = attractionsImages;
        this.attractionsImages$.next(this.attractionsImages);
      });
  }
}
