import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalcinationPage } from './calcination.page';

describe('CalcinationPage', () => {
  let component: CalcinationPage;
  let fixture: ComponentFixture<CalcinationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalcinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
