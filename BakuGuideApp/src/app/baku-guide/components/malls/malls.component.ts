import { Component, OnInit } from '@angular/core';
import { Mall } from '../../models/mall';

@Component({
  selector: 'app-malls',
  templateUrl: './malls.component.html',
  styleUrls: ['./malls.component.scss']
})
export class MallsComponent implements OnInit {

  public pageName: string = "Malls Page";
  
  public malls: Mall[] = [
    {id: "1", name: "Mall 1"},
    {id: "2", name: "Mall 2"},
    {id: "3", name: "Mall 3"},
    {id: "4", name: "Mall 4"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
