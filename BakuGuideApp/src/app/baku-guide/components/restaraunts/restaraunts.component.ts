import { state, style, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Restaraunt } from '../../models/restaurant';
import { RestarauntsService } from '../../services/restaraunts.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { combineLatest, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-restaraunts',
  templateUrl: './restaraunts.component.html',
  styleUrls: ['./restaraunts.component.scss'],
  animations: [
    trigger('title', [
      state(
        'start',
        style({
          transform: 'translate(0px, 0px)',
          opacity: '1',
        })
      ),
    ]),
  ],
})
export class RestarauntsComponent implements OnInit, AfterViewInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public titleState: string = 'start';
  public restaraunts: Restaraunt[];
  public p: number = 1;
  public form: FormGroup;
  public cuisines: string;
  public selectedRestaraunt: Restaraunt;

  Cuisine: Array<any> = [
    { name: 'Azerbaijani', value: 'Azerbaijani' },
    { name: 'Turkish', value: 'Turkish' },
    { name: 'Russian', value: 'Russian' },
    { name: 'Georgian', value: 'Georgian' },
    { name: 'Arabic', value: 'Arabic' },
    { name: 'Mediterranean', value: 'Mediterranean' },
    { name: 'Middle Eastern', value: 'Middle Eastern' },
    { name: 'Uzbek', value: 'Uzbek' },
    { name: 'Indian', value: 'Indian' },
    { name: 'Japanese', value: 'Japanese' },
    { name: 'Chinese', value: 'Chinese' },
    { name: 'Italian', value: 'Italian' },
    { name: 'Spanish', value: 'Spanish' },
    { name: 'European', value: 'European' },
    { name: 'German', value: 'German' },
    { name: 'French', value: 'French' },
    { name: 'American', value: 'American' },
    { name: 'Central European', value: 'Central European' },
    { name: 'Eastern European', value: 'Eastern European' },
    { name: 'Asian', value: 'Asian' },
    { name: 'Moroccan', value: 'Moroccan' },
  ];

  Menu: Array<any> = [
    { name: 'Seafood', value: 'Seafood' },
    { name: 'Sushi', value: 'Sushi' },
    { name: 'Vegeterian', value: 'Vegetarian Friendly' },
    { name: 'Vegan Options', value: 'Vegan Options' },
    { name: 'Gluten Free', value: 'Gluten Free Options' },
    { name: 'Halal', value: 'Halal' },
    { name: 'Healthy', value: 'Healthy' },
    { name: 'Grill', value: 'Grill' },
    { name: 'Barbecue', value: 'Barbecue' },
    { name: 'Soups', value: 'Soups' },
  ];

  Type: Array<any> = [
    { name: 'Cafe', value: 'Cafe' },
    { name: 'Bar', value: 'Bar' },
    { name: 'Wine Bar', value: 'Wine Bar' },
    { name: 'Pub', value: 'Pub' },
    { name: 'Fast Food', value: 'Fast Food' },
    { name: 'Steakhouse', value: 'Steakhouse' },
  ];

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
  }
  ngAfterViewInit() {
    console.log(
      document.querySelector('.restaraunts__restaraunt-list')?.children
    );
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
