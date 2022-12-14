import { Component, OnInit } from '@angular/core';
import { Theatre } from '../../models/theatre';
import { TheatresService } from '../../services/theatres.service';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.scss'],
})
export class TheatresComponent implements OnInit {
  public theatres: Theatre[];
  public p: number = 1;

  constructor(private theatresService: TheatresService) {}

  ngOnInit(): void {
    this.theatresService.theatres$.subscribe((theatres: Theatre[]) => {
      this.theatres = theatres;
    });
  }
}
