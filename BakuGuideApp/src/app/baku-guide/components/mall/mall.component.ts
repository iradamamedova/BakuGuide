import { Component, Input, OnInit } from '@angular/core';
import { Mall } from '../../models/mall';

@Component({
  selector: 'app-mall',
  templateUrl: './mall.component.html',
  styleUrls: ['./mall.component.scss'],
})
export class MallComponent implements OnInit {
  @Input()
  public mall: Mall;

  constructor() {}

  ngOnInit(): void {}
}
