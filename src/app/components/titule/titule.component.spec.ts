import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituleComponent } from './titule.component';

describe('TituleComponent', () => {
  let component: TituleComponent;
  let fixture: ComponentFixture<TituleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
