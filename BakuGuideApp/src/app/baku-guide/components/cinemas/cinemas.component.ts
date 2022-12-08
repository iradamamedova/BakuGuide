import { Component, OnInit } from '@angular/core';
import { Cinema } from '../../models/cinema';
import { CinemasService } from '../../services/cinemas.service';

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.scss'],
})
export class CinemasComponent implements OnInit {
  public cinemas: Cinema[] = [];
  public addresses: any[];

  constructor(private cinemasService: CinemasService) {
    this.cinemasService.cinemas$.subscribe((cinemas: Cinema[]) => {
      this.cinemas = cinemas;
      this.addresses = cinemas.map((c) => c.address);
    });
  }

  ngOnInit(): void {}
}
