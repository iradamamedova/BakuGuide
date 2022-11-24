import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'BakuGuide';
  public isLoading: boolean = true;

  constructor() {}

  public ngOnInit(): void {
    this.isLoading = false;
  } 

}