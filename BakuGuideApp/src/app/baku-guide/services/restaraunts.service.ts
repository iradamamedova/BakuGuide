import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Restaraunt } from '../models/restaurant';
import { RestarauntsDataService } from './restaraunts-data.service';

@Injectable()
export class RestarauntsService {
  public restaraunts: Restaraunt[] = [];
  public filtrationData: any[] = [];

  public restaraunts$: BehaviorSubject<Restaraunt[]> = new BehaviorSubject<Restaraunt[]>(
    this.restaraunts
    );
  public filtrationData$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    this.filtrationData
    );

  constructor(private restarauntsDataService: RestarauntsDataService) {
    this.restarauntsDataService
      .getRestaraunts()
      .subscribe((restaraunts: Restaraunt[]) => {
        this.restaraunts = restaraunts;
        this.restaraunts$.next(this.restaraunts);
      });
    this.restarauntsDataService
      .getDataForFiltration()
      .subscribe((filtrationData: any[]) => {
        this.filtrationData = filtrationData;
        this.filtrationData$.next(this.filtrationData);
      });
  }
}
