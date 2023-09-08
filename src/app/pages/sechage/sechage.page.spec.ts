import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SechagePage } from './sechage.page';

describe('SechagePage', () => {
  let component: SechagePage;
  let fixture: ComponentFixture<SechagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SechagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
