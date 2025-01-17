import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinnersComponent } from './dinners.component';

describe('DinnersComponent', () => {
  let component: DinnersComponent;
  let fixture: ComponentFixture<DinnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
