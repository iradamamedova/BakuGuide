import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Museum } from '../models/museum';
import { MuseumsDataService } from './museums-data.service';

@Injectable()
export class MuseumsService {
  public museums: Museum[] = [];

  public museums$: BehaviorSubject<Museum[]> = new BehaviorSubject<Museum[]>(
    this.museums
  );

  constructor(private museumsDataService: MuseumsDataService) {
    this.museumsDataService
      .getMuseums()
      .pipe(take(1))
      .subscribe((museums: Museum[]) => {
        this.museums = museums;
        this.museums$.next(this.museums);
      });
  }
}
