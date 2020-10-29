import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CarCreationPopupComponent } from './car-creation-popup.component';

describe('CarDetailsComponent', () => {
  let component: CarCreationPopupComponent;
  let fixture: ComponentFixture<CarCreationPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CarCreationPopupComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarCreationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
