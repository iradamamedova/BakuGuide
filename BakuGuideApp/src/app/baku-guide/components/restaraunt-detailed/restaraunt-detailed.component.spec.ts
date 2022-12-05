import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestarauntDetailedComponent } from './restaraunt-detailed.component';

describe('RestarauntDetailedComponent', () => {
  let component: RestarauntDetailedComponent;
  let fixture: ComponentFixture<RestarauntDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestarauntDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestarauntDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
