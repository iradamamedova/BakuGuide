import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Restaraunt } from '../models/restaurant';
import { RestarauntsDataService } from './restaraunts-data.service';

@Injectable()
export class RestarauntsService {
  public restaraunts: Restaraunt[] = [];
 // public filteredRestaraunts: Restaraunt[] = [];

  public restaraunts$: BehaviorSubject<Restaraunt[]> = new BehaviorSubject<Restaraunt[]>(this.restaraunts);

  constructor(private restarauntsDataService: RestarauntsDataService) {
    this.restarauntsDataService
      .getRestaraunts()
      .pipe(take(1))
      .subscribe((restaraunts: Restaraunt[]) => {
        this.restaraunts = restaraunts;
        this.restaraunts$.next(this.restaraunts);
    })
  }

  // filter() {
  //   this.filteredRestaraunts = [...this.restaraunts.filter(restaraunt => restaraunt.cuisine.includes(this.filterBy))];
  // }
}