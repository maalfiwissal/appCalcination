import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VueGeneralePage } from './vue-generale.page';

describe('VueGeneralePage', () => {
  let component: VueGeneralePage;
  let fixture: ComponentFixture<VueGeneralePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VueGeneralePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
