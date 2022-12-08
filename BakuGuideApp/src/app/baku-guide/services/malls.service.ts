import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Mall } from '../models/mall';
import { MallsDataService } from './malls-data.service';

@Injectable()
export class MallsService {
  public malls: Mall[] = [];

  public malls$: BehaviorSubject<Mall[]> = new BehaviorSubject<Mall[]>(
    this.malls
  );

  constructor(private mallsDataService: MallsDataService) {
    this.mallsDataService
      .getMalls()
      .pipe(take(1))
      .subscribe((malls: Mall[]) => {
        this.malls = malls;
        this.malls$.next(this.malls);
      });
  }
}
