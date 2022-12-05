import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Restaraunt } from '../models/restaurant';
import { RestarauntsDataService } from './restaraunts-data.service';

@Injectable()
export class RestarauntsService {
  public restaraunts: Restaraunt[] = [];

  public restaraunts$: BehaviorSubject<Restaraunt[]> = new BehaviorSubject<Restaraunt[]>(this.restaraunts);

  constructor(private restarauntsDataService: RestarauntsDataService) {
    this.restarauntsDataService
      .getRestaraunts()
      .subscribe((restaraunts: Restaraunt[]) => {
        this.restaraunts = restaraunts;
        this.restaraunts$.next(this.restaraunts);
      });
  }

}
