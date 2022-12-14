import {
  trigger,
  transition,
  animate,
  keyframes,
  style,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-btn',
  templateUrl: './nav-btn.component.html',
  styleUrls: ['./nav-btn.component.scss'],
  animations: [
    trigger('pulse', [
      transition('* => *', [
        animate(
          1000,
          keyframes([
            style({
              transform: 'scale(1)',
              boxShadow: '0 0 2px #666',
              offset: 0,
            }),
            style({
              transform: 'scale(1.009)',
              boxShadow: '0 0 10px #666',
              offset: 0.33,
            }),
            style({
              transform: 'scale(1)',
              boxShadow: '0 0 2px #666',
              offset: 0.66,
            }),
            style({
              transform: 'scale(1.009)',
              boxShadow: '0 0 10px #666',
              offset: 1.0,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class NavBtnComponent implements OnInit {
  @Input()
  public text: string;

  @Input()
  public image: string;

  @Input()
  public link: string;

  @Input()
  public hrefLink: string;

  public pulseState: string = 'start';
  public trigger: boolean;

  constructor() {}

  ngOnInit(): void {
    const pulse = setInterval(() => (this.trigger = !this.trigger), 1000);
  }
}
