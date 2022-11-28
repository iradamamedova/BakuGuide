import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutdoorActivitiesComponent } from './outdoor-activities.component';

describe('OutdoorActivitiesComponent', () => {
  let component: OutdoorActivitiesComponent;
  let fixture: ComponentFixture<OutdoorActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutdoorActivitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutdoorActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
