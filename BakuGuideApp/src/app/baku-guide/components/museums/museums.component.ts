import { Component, OnInit } from '@angular/core';
import { Museum } from '../../models/museum';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss']
})
export class MuseumsComponent implements OnInit {

  public pageName: string = "Museums Page";

  public museums: Museum[] = [
    {id: "1", name: "Museum 1"},
    {id: "2", name: "Museum 2"},
    {id: "3", name: "Museum 3"},
    {id: "4", name: "Museum 4"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
