import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAndResultComponent } from './review-and-result.component';

describe('ReviewAndResultComponent', () => {
  let component: ReviewAndResultComponent;
  let fixture: ComponentFixture<ReviewAndResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAndResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewAndResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
