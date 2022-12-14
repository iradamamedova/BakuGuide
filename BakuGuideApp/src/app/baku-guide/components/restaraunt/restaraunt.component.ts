import { Component, Input, OnInit } from '@angular/core';
import { RevealService } from 'src/app/shared/services/reveal.service';
import { Restaraunt } from '../../models/restaurant';

@Component({
  selector: 'app-restaraunt',
  templateUrl: './restaraunt.component.html',
  styleUrls: ['./restaraunt.component.scss'],
})
export class RestarauntComponent implements OnInit {
  @Input()
  public restaraunt: Restaraunt;

  constructor(private revealService: RevealService) {}

  ngOnInit(): void {
    this.revealService.reveal();
  }
}
