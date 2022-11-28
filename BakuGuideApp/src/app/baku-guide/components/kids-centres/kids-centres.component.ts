import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { KidsCentre } from '../../models/kids-centre';
import { KidsCentresDataService } from '../../services/kids-centres-data.service';

@Component({
  selector: 'app-kids-and-families',
  templateUrl: './kids-centres.component.html',
  styleUrls: ['./kids-centres.component.scss']
})
export class KidsCentresComponent implements OnInit {
  public kidsCentres: KidsCentre[] = [];

  public kidsCentres$: BehaviorSubject<KidsCentre[]> = new BehaviorSubject<KidsCentre[]>(this.kidsCentres);

  constructor(private kidsCentresDataService: KidsCentresDataService) {
    this.kidsCentresDataService
      .getKidsCentres()
      .pipe(take(1))
      .subscribe((kidsCentres: KidsCentre[]) => {
        this.kidsCentres = kidsCentres;
        this.kidsCentres$.next(this.kidsCentres);
      });
  }
  ngOnInit(): void {
  }

}
