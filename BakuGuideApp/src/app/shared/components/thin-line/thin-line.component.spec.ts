import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinLineComponent } from './thin-line.component';

describe('ThinLineComponent', () => {
  let component: ThinLineComponent;
  let fixture: ComponentFixture<ThinLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThinLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
