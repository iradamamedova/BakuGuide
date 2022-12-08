import { Component, OnInit } from '@angular/core';
import { Museum } from '../../models/museum';
import { MuseumsService } from '../../services/museums.service';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss'],
})
export class MuseumsComponent implements OnInit {
  public museums: Museum[] = [];

  constructor(private museumsService: MuseumsService) {
    this.museumsService.museums$.subscribe((museums: Museum[]) => {
      this.museums = museums;
    });
  }

  ngOnInit(): void {}
}
