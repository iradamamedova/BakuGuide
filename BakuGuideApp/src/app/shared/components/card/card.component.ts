import { Component, Input, OnInit } from '@angular/core';
import { RevealService } from '../../services/reveal.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  public type: string;

  @Input()
  public title: string;

  @Input()
  public description: string;

  @Input()
  public image: string;

  @Input()
  public link: string;

  @Input()
  public location: string;

  @Input()
  public hoursOpen: string;
  
  @Input()
  public hoursClose: string;

  @Input()
  public images: any[];

  constructor(private revealService: RevealService) {}

  ngOnInit(): void {
    this.revealService.reveal();
  }
}
