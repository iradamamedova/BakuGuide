import { Component, OnInit } from '@angular/core';
import { Park } from '../../models/park';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.scss'],
})
export class ParksComponent implements OnInit {
  public pageName: string = 'Parks Page';

  public parks: Park[] = [
    {id: "1", name: "Park 1"},
    {id: "2", name: "Park 2"},
    {id: "3", name: "Park 3"},
    {id: "4", name: "Park 4"},
  ];

  constructor() {}

  ngOnInit(): void {}
}
