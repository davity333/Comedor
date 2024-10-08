import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServicioDomicilioComponent } from './page-servicio-domicilio.component';

describe('PageServicioDomicilioComponent', () => {
  let component: PageServicioDomicilioComponent;
  let fixture: ComponentFixture<PageServicioDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageServicioDomicilioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageServicioDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
