import { trigger, state, style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('title', [
      state(
        'start',
        style({
          transform: 'translate(0px, 0px)',
          opacity: '1',
        })
      ),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  public titleState: string = 'start';

  @Input()
  public pageName: string;

  @Input()
  public image: string;

  constructor() {}

  ngOnInit(): void {}
}
