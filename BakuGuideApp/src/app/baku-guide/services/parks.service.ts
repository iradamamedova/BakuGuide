import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Park } from '../models/park';
import { ParksDataService } from './parks-data.service';

@Injectable()
export class ParksService {
  public parks: Park[] = [];

  public parks$: BehaviorSubject<Park[]> = new BehaviorSubject<Park[]>(
    this.parks
  );

  constructor(private parksDataService: ParksDataService) {
    this.parksDataService
      .getParks()
      .pipe(take(1))
      .subscribe((parks: Park[]) => {
        this.parks = parks;
        this.parks$.next(this.parks);
      });
  }
}
