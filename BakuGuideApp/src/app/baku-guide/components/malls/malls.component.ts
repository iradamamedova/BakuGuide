import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Mall } from '../../models/mall';
import { MallsService } from '../../services/malls.service';

@Component({
  selector: 'app-malls',
  templateUrl: './malls.component.html',
  styleUrls: ['./malls.component.scss'],
})
export class MallsComponent implements OnInit {
  public malls: Mall[] = [];

  constructor(private mallsService: MallsService) {
    this.mallsService.malls$.subscribe((malls: Mall[]) => {
      this.malls = malls;
    });
  }

  ngOnInit(): void {}
}
