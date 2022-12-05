import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Cinema } from '../../models/cinema';
import { CinemasDataService } from '../../services/cinemas-data.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss'],
})
export class CinemasComponent implements OnInit {
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
        this.cinemas = cinemas;
        this.addresses = cinemas.map((c) => c.address);
        this.cinemas$.next(this.cinemas);
      });
  }

  ngOnInit(): void {}
}
