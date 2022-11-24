import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Restaraunt } from '../../models/restaurant';

@Component({
  selector: 'app-restaraunts',
  templateUrl: './restaraunts.component.html',
  styleUrls: ['./restaraunts.component.scss']
})
export class RestarauntsComponent implements OnInit {

  public pageName: string = "Restaraunts Page";
  
  public restaraunts: Restaraunt[] = [];
  public imageObject: Array<object>;

  public constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const url: string = '/assets/dataset_tripadvisor_2022-11-14_11-37-22-813.json';

    this.http.get<Restaraunt[]>(url)
    .subscribe((restaraunts) => {
      this.restaraunts = restaraunts;
    });
  }

}
