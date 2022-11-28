import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Mall } from '../../models/mall';
import { MallsDataService } from '../../services/malls-data.service';

@Component({
  selector: 'app-malls',
  templateUrl: './malls.component.html',
  styleUrls: ['./malls.component.scss']
})
export class MallsComponent implements OnInit {

  public malls: Mall[] = [];

  public malls$: BehaviorSubject<Mall[]> = new BehaviorSubject<Mall[]>(this.malls);

  constructor(private mallsDataService: MallsDataService) {
    this.mallsDataService
      .getMalls()
      .pipe(take(1))
      .subscribe((malls: Mall[]) => {
        this.malls = malls;
        this.malls$.next(this.malls);
      });
  }

  ngOnInit(): void {
  }

}
