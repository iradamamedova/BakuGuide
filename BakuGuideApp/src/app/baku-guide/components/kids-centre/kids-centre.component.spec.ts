import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCentreComponent } from './kids-centre.component';

describe('KidsCentreComponent', () => {
  let component: KidsCentreComponent;
  let fixture: ComponentFixture<KidsCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidsCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
