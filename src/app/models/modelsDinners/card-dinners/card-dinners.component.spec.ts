import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDinnersComponent } from './card-dinners.component';

describe('CardDinnersComponent', () => {
  let component: CardDinnersComponent;
  let fixture: ComponentFixture<CardDinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDinnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
