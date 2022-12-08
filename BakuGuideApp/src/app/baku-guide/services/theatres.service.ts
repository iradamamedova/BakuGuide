import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Theatre } from '../models/theatre';
import { TheatresDataService } from './theatres-data.service';

@Injectable()
export class TheatresService {
  public theatres: Theatre[] = [];

  public theatres$: BehaviorSubject<Theatre[]> = new BehaviorSubject<Theatre[]>(
    this.theatres
  );

  constructor(private theatresDataService: TheatresDataService) {
    this.theatresDataService
      .getTheatres()
      .pipe(take(1))
      .subscribe((theatres: Theatre[]) => {
        this.theatres = theatres;
        this.theatres$.next(this.theatres);
      });
  }
}
