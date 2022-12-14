import { Component, OnDestroy, OnInit } from '@angular/core';
import { Restaraunt } from '../../models/restaurant';
import { RestarauntsService } from '../../services/restaraunts.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-restaraunts',
  templateUrl: './restaraunts.component.html',
  styleUrls: ['./restaraunts.component.scss']
})
export class RestarauntsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public restaraunts: Restaraunt[];
  public p: number = 1;
  public form: FormGroup;
  public cuisines: string;
  public selectedRestaraunt: Restaraunt;

  public cuisine: any[] = [];
  public menu: any[] = [];
  public type: any[] = [];

  constructor(
    private restarauntsService: RestarauntsService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      checkArray: this.fb.array([]),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    combineLatest([
      this.restarauntsService.restaraunts$,
      this.activatedRoute.params,
    ])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([restaraunts, params]: [Restaraunt[], Params]) => {
        this.restaraunts = restaraunts;
        const selectedRestaraunt: Restaraunt | undefined =
          this.restaraunts.find((restaraunt) => restaraunt.id === params['id']);
        if (selectedRestaraunt) {
          this.selectedRestaraunt = selectedRestaraunt;
        }
      });
    this.restarauntsService.filtrationData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((filtrationData: any[]) => {
        this.cuisine = filtrationData[0].cuisine;
        this.menu = filtrationData[0].menu;
        this.type = filtrationData[0].type;
      });
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    this.cuisines = this.form.value.checkArray.toString();
    this.updateRestaraunts();
  }

  updateRestaraunts() {
    this.ngOnInit();
    this.restaraunts = this.cuisines
      ? this.filterByCuisine()
      : this.restaraunts;
  }

  filterByCuisine() {
    let cuisineList: Array<string> = this.cuisines.split(',');
    let filteredResult: any[];

    let result = this.restaraunts.map((restaraunt) => {
      let results = [];
      for (let i = 0; i < cuisineList.length; i++) {
        results.push(restaraunt.cuisine.includes(cuisineList[i]));
      }
      if (results.includes(false)) {
        return null;
      } else {
        return restaraunt;
      }
    });
    filteredResult = result.filter((r) => r !== null);

    return filteredResult;
  }
}
