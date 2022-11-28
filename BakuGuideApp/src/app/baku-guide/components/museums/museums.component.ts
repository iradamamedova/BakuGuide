import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Museum } from '../../models/museum';
import { MuseumsDataService } from '../../services/museums-data.service';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss'],
})
export class MuseumsComponent implements OnInit {

  public museums: Museum[] = [];

  public museums$: BehaviorSubject<Museum[]> = new BehaviorSubject<Museum[]>(this.museums);

  constructor(private museumsDataService: MuseumsDataService) {
    this.museumsDataService
      .getMuseums()
      .pipe(take(1))
      .subscribe((museums: Museum[]) => {
        this.museums = museums;
        this.museums$.next(this.museums);
      });
  }

  ngOnInit(): void {
  }
}
