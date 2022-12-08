import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Cinema } from '../models/cinema';
import { CinemasDataService } from './cinemas-data.service';

@Injectable()
export class CinemasService {
  public cinemas: Cinema[] = [];

  public cinemas$: BehaviorSubject<Cinema[]> = new BehaviorSubject<Cinema[]>(
    this.cinemas
  );

  public addresses: any = [];

  constructor(private cinemasDataService: CinemasDataService) {
    this.cinemasDataService
      .getCinemas()
      .pipe(take(1))
      .subscribe((cinemas: Cinema[]) => {
        this.addresses = cinemas.map((c) => c.address);
        this.cinemas = cinemas;
        this.cinemas$.next(this.cinemas);
      });
  }
}
