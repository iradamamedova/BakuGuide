import { Component, OnInit } from '@angular/core';
import { Theatre } from '../../models/theatre';

@Component({
  selector: 'app-theatres',
  templateUrl: './theatres.component.html',
  styleUrls: ['./theatres.component.scss']
})
export class TheatresComponent implements OnInit {
  public pageName: string = "Theatres Page";

  public theatres: Theatre[] = [
    {id: "1", name: "Theatre 1"},
    {id: "2", name: "Theatre 2"},
    {id: "3", name: "Theatre 3"},
    {id: "4", name: "Theatre 4"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
