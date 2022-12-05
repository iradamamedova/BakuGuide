import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Restaraunt } from '../../models/restaurant';
import { RestarauntsService } from '../../services/restaraunts.service';

@Component({
  selector: 'app-restaraunt-detailed',
  templateUrl: './restaraunt-detailed.component.html',
  styleUrls: ['./restaraunt-detailed.component.scss']
})
export class RestarauntDetailedComponent implements OnInit {

  @Input() 
  public restaraunt: Restaraunt;

  constructor() {    
  }

  ngOnInit(): void {
  }

}
