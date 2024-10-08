import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBreakfastsComponent } from './cards-breakfasts.component';

describe('CardsBreakfastsComponent', () => {
  let component: CardsBreakfastsComponent;
  let fixture: ComponentFixture<CardsBreakfastsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsBreakfastsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsBreakfastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
