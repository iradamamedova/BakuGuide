import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Theatre } from '../../models/theatre';
import { TheatresDataService } from '../../services/theatres-data.service';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.scss'],
})
export class TheatresComponent implements OnInit {

  public theatres: Theatre[] = [];

  public theatres$: BehaviorSubject<Theatre[]> = new BehaviorSubject<Theatre[]>(this.theatres);

  constructor(private theatresDataService: TheatresDataService) {
    this.theatresDataService
      .getTheatres()
      .pipe(take(1))
      .subscribe((theatres: Theatre[]) => {
        this.theatres = theatres;
        this.theatres$.next(this.theatres);
      });
  }

  ngOnInit(): void {
  }
}
